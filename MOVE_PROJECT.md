# 🚀 FIX: Move Project to Local Path

## Issue Identified

Your project is on a **network path**: `//cscinfo/dfs/homes/.../code/meetrix_new`

This causes EAS Build to preserve the absolute path, leading to errors.

## ✅ Solution: Move to Local Drive

Move your project to a **local path** like `C:\meetrix`

### Step-by-Step Instructions

#### Step 1: Move Project

```powershell
# Create destination folder
New-Item -ItemType Directory -Force -Path C:\meetrix

# Copy project (or move if you prefer)
Copy-Item -Path X:\code\meetrix_new\* -Destination C:\meetrix -Recurse -Force

# Go to new location
cd C:\meetrix
```

#### Step 2: Verify Files

```powershell
# Check package.json exists
dir package.json

# Check git
git status
```

#### Step 3: Reinitialize Git (if needed)

If git doesn't work in new location:

```powershell
# Remove old git reference
Remove-Item -Recurse -Force .git

# Reinitialize git
git init
git add .
git commit -m "Initial commit - moved to local path"
```

#### Step 4: Build from New Location

```powershell
# Build from local path
npx eas-cli build --platform android --profile preview --clear-cache
```

## Quick Command Script

Create a file `move-and-build.ps1`:

```powershell
# Move project
$source = "X:\code\meetrix_new"
$dest = "C:\meetrix"

Write-Host "Copying project from $source to $dest..."
Copy-Item -Path $source\* -Destination $dest -Recurse -Force

Write-Host "Moving to new location..."
cd $dest

Write-Host "Reinitializing git..."
Remove-Item -Recurse -Force .git -ErrorAction SilentlyContinue
git init
git add .
git commit -m "Initial commit - local path"

Write-Host "Building APK..."
npx eas-cli build --platform android --profile preview --clear-cache
```

## Why This Fixes It

1. **Local paths** don't have network path issues
2. **Shorter path** (`C:\meetrix`) avoids path length issues
3. **Fresh git** ensures no absolute path references
4. **Clean build** from new location

## Alternative: Just Copy Essential Files

If you prefer, create a minimal copy:

```powershell
# Create clean project
mkdir C:\meetrix
cd C:\meetrix

# Copy only essential files
Copy-Item X:\code\meetrix_new\package.json .
Copy-Item X:\code\meetrix_new\app.json .
Copy-Item X:\code\meetrix_new\App.js .
Copy-Item X:\code\meetrix_new\babel.config.js .
Copy-Item X:\code\meetrix_new\eas.json .
Copy-Item X:\code\meetrix_new\src -Recurse .
Copy-Item X:\code\meetrix_new\assets -Recurse .

# Initialize git
git init
git add .
git commit -m "Clean project for build"

# Build
npx eas-cli build --platform android --profile preview --clear-cache
```

---

## **Try This Now:**

```powershell
# Quick move command
Move-Item X:\code\meetrix_new C:\meetrix
cd C:\meetrix
npx eas-cli build --platform android --profile preview --clear-cache
```

**This should fix the path issue!** 🎯

