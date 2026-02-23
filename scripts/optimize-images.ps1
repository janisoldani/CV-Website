<#
.SYNOPSIS
    Converts all JPEG/PNG images in assets/ to WebP format.

.DESCRIPTION
    Generates a .webp version of every .jpg/.jpeg/.png file found in the assets/
    directory. The createPicture() helper in js/shared.js serves the .webp via a
    <source> element and silently falls back to the original if the file is missing,
    so you can run this script incrementally — images already converted are skipped.

.REQUIREMENTS
    One of the following must be available on PATH:
      • cwebp  (https://developers.google.com/speed/webp/download)
      • magick (ImageMagick 7+, https://imagemagick.org)
      • ffmpeg (https://ffmpeg.org, bundled WebP encoder)

    Install cwebp (recommended, smallest output):
      winget install Google.WebPCodec    # or download the libwebp tools zip

    Install ImageMagick (alternative):
      winget install ImageMagick.ImageMagick

.USAGE
    # From the project root:
    powershell -ExecutionPolicy Bypass -File scripts/optimize-images.ps1

    # Dry-run (shows what would be converted without writing files):
    powershell -ExecutionPolicy Bypass -File scripts/optimize-images.ps1 -DryRun

    # Force re-conversion even if .webp already exists:
    powershell -ExecutionPolicy Bypass -File scripts/optimize-images.ps1 -Force

.PARAMETERS
    -Quality   WebP quality 0-100 (default: 82 — good balance for photos)
    -DryRun    Print what would be done without writing any files
    -Force     Re-convert even if the .webp file already exists
#>

param(
    [int]   $Quality = 82,
    [switch]$DryRun,
    [switch]$Force
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

# ─────────────────────────────────────────────────────────────────────────────
# Paths
# ─────────────────────────────────────────────────────────────────────────────

# Script lives in  scripts/  — resolve the project root one level up
$projectRoot = Split-Path -Parent $PSScriptRoot
$assetsDir   = Join-Path $projectRoot "assets"

if (-not (Test-Path $assetsDir)) {
    Write-Error "assets/ directory not found at: $assetsDir"
    exit 1
}

# ─────────────────────────────────────────────────────────────────────────────
# Detect encoder
# ─────────────────────────────────────────────────────────────────────────────

function Find-Encoder {
    $tools = @("cwebp", "magick", "ffmpeg")
    foreach ($t in $tools) {
        if (Get-Command $t -ErrorAction SilentlyContinue) {
            return $t
        }
    }
    return $null
}

$encoder = Find-Encoder

if (-not $encoder) {
    Write-Host ""
    Write-Host "ERROR: No WebP encoder found on PATH." -ForegroundColor Red
    Write-Host ""
    Write-Host "Install one of the following and re-run this script:" -ForegroundColor Yellow
    Write-Host "  cwebp (recommended):"
    Write-Host "    winget install Google.WebPCodec"
    Write-Host "  ImageMagick:"
    Write-Host "    winget install ImageMagick.ImageMagick"
    Write-Host "  ffmpeg:"
    Write-Host "    winget install Gyan.FFmpeg"
    Write-Host ""
    exit 1
}

Write-Host "Encoder : $encoder" -ForegroundColor Cyan
Write-Host "Quality : $Quality"
Write-Host "Assets  : $assetsDir"
if ($DryRun)  { Write-Host "Mode    : DRY RUN (no files written)" -ForegroundColor Yellow }
if ($Force)   { Write-Host "Mode    : FORCE (overwrite existing .webp)" -ForegroundColor Yellow }
Write-Host ""

# ─────────────────────────────────────────────────────────────────────────────
# Convert function
# ─────────────────────────────────────────────────────────────────────────────

function Convert-ToWebP {
    param(
        [string]$InputFile,
        [string]$OutputFile,
        [string]$Encoder,
        [int]   $Quality
    )

    switch ($Encoder) {
        "cwebp" {
            & cwebp -q $Quality -mt -quiet "$InputFile" -o "$OutputFile"
        }
        "magick" {
            & magick "$InputFile" -quality $Quality "$OutputFile"
        }
        "ffmpeg" {
            & ffmpeg -y -i "$InputFile" -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" `
                -c:v libwebp -quality $Quality -lossless 0 "$OutputFile" `
                -hide_banner -loglevel error
        }
    }

    return $LASTEXITCODE
}

# ─────────────────────────────────────────────────────────────────────────────
# Main loop
# ─────────────────────────────────────────────────────────────────────────────

$images    = Get-ChildItem -Path $assetsDir -File -Include "*.jpg","*.jpeg","*.png" -Recurse
$converted = 0
$skipped   = 0
$errors    = 0
$totalSaved = 0

if ($images.Count -eq 0) {
    Write-Host "No JPEG/PNG images found in assets/." -ForegroundColor Yellow
    exit 0
}

foreach ($img in $images) {
    $stem   = [System.IO.Path]::GetFileNameWithoutExtension($img.Name)
    $outPath = Join-Path $img.DirectoryName "$stem.webp"

    if ((Test-Path $outPath) -and -not $Force) {
        Write-Host "  SKIP  $($img.Name)  (webp exists)" -ForegroundColor DarkGray
        $skipped++
        continue
    }

    $originalSize = $img.Length

    if ($DryRun) {
        Write-Host "  WOULD CONVERT  $($img.Name)  →  $stem.webp" -ForegroundColor Cyan
        $converted++
        continue
    }

    Write-Host "  CONVERT  $($img.Name)  →  $stem.webp" -ForegroundColor Green -NoNewline

    $exitCode = Convert-ToWebP -InputFile $img.FullName -OutputFile $outPath `
                               -Encoder $encoder -Quality $Quality

    if ($exitCode -eq 0 -and (Test-Path $outPath)) {
        $webpSize  = (Get-Item $outPath).Length
        $savedKB   = [math]::Round(($originalSize - $webpSize) / 1KB, 1)
        $savedPct  = if ($originalSize -gt 0) { [math]::Round(100 - ($webpSize / $originalSize * 100), 1) } else { 0 }
        $totalSaved += ($originalSize - $webpSize)
        Write-Host "  [$savedKB KB saved, -$savedPct%]" -ForegroundColor DarkGreen
        $converted++
    } else {
        Write-Host "  [FAILED]" -ForegroundColor Red
        $errors++
        # Remove partial output on failure
        if (Test-Path $outPath) { Remove-Item $outPath -Force }
    }
}

# ─────────────────────────────────────────────────────────────────────────────
# Summary
# ─────────────────────────────────────────────────────────────────────────────

Write-Host ""
Write-Host "─────────────────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host "Converted : $converted" -ForegroundColor Green
Write-Host "Skipped   : $skipped"   -ForegroundColor DarkGray
if ($errors -gt 0) {
    Write-Host "Errors    : $errors" -ForegroundColor Red
}
if ($totalSaved -gt 0) {
    $totalSavedKB = [math]::Round($totalSaved / 1KB, 1)
    Write-Host "Total saved: $totalSavedKB KB" -ForegroundColor Cyan
}

if ($DryRun) {
    Write-Host ""
    Write-Host "Dry run complete. Re-run without -DryRun to write files." -ForegroundColor Yellow
}
