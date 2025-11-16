# PowerShell script to copy project to local path and build
# This fixes the Windows absolute path issue

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Meetrix - Copy to Local Path & Build" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Configuration
$sourcePath = "X:\code\meetrix_new"
$destPath = "C:\meetrix"

# Check if source exists
if (-not (Test-Path $sourcePath)) {
    Write-Host "Error: Source path not found: $sourcePath" -ForegroundColor Red
    exit 1
}

# Create destination directory
Write-Host "Creating destination directory: $destPath" -ForegroundColor Yellow
if (Test-Path $destPath) {
    Write-Host "Warning: Destination already exists. Removing..." -ForegroundColor Yellow
    Remove-Item -Path $destPath -Recurse -Force
}
New-Item -ItemType Directory -Path $destPath -Force | Out-Null

# Copy essential files only
Write-Host "Copying project files..." -ForegroundColor Yellow

# Essential files
$filesToCopy = @(
    "package.json",
    "app.json",
    "App.js",
    "babel.config.js",
    "eas.json",
    ".gitignore",
    ".easignore"
)

foreach ($file in $filesToCopy) {
    if (Test-Path "$sourcePath\$file") {
        Copy-Item "$sourcePath\$file" -Destination "$destPath\$file" -Force
        Write-Host "  Copied: $file" -ForegroundColor Gray
    }
}

# Copy directories
$dirsToCopy = @(
    "src",
    "assets"
)

foreach ($dir in $dirsToCopy) {
    if (Test-Path "$sourcePath\$dir") {
        Copy-Item "$sourcePath\$dir" -Destination "$destPath\$dir" -Recurse -Force
        Write-Host "  Copied: $dir\" -ForegroundColor Gray
    }
}

# Navigate to new location
Set-Location $destPath
Write-Host ""
Write-Host "Changed to: $destPath" -ForegroundColor Green

# Initialize fresh git repository
Write-Host ""
Write-Host "Initializing fresh git repository..." -ForegroundColor Yellow
if (Test-Path ".git") {
    Remove-Item -Path ".git" -Recurse -Force
}
git init | Out-Null
git add . | Out-Null
git commit -m "Initial commit - local path" | Out-Null
Write-Host "  Git initialized" -ForegroundColor Gray

# Verify package.json exists
if (Test-Path "package.json") {
    Write-Host ""
    Write-Host "✅ package.json found!" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "❌ Error: package.json not found!" -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host ""
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: npm install failed" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Ready to Build!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Project copied to: $destPath" -ForegroundColor Green
Write-Host ""
Write-Host "Now run:" -ForegroundColor Yellow
Write-Host "  npx eas-cli build --platform android --profile preview --clear-cache" -ForegroundColor Cyan
Write-Host ""

# Ask if user wants to build now
$response = Read-Host "Do you want to build now? (Y/N)"
if ($response -eq "Y" -or $response -eq "y") {
    Write-Host ""
    Write-Host "Starting build..." -ForegroundColor Yellow
    npx eas-cli build --platform android --profile preview --clear-cache
}

