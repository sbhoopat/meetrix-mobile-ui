# WORKAROUND: Fix Windows Absolute Path Issue

## Problem Persists

The error `package.json does not exist in /home/expo/workingdir/build/X:/code/meetrix_new` means EAS Build is preserving the Windows absolute path.

## Root Cause

EAS Build on Windows sometimes preserves the absolute path structure when creating the build archive. This is a known issue with certain Windows path configurations.

## **Solution: Move Project to Shorter Path**

This is the **MOST RELIABLE FIX** for Windows path issues:

### Step 1: Move Project

Move your project from `X:\code\meetrix_new` to a shorter path:

**Option A: Move to C drive**
```powershell
# Move to C drive
Move-Item X:\code\meetrix_new C:\meetrix
cd C:\meetrix
```

**Option B: Keep same drive but shorter path**
```powershell
# Move to shorter path
Move-Item X:\code\meetrix_new X:\meetrix
cd X:\meetrix
```

### Step 2: Update Git (if needed)

Git should work automatically, but if needed:

```powershell
git config --global --unset core.worktree
```

### Step 3: Build from New Location

```bash
npx eas-cli build --platform android --profile preview --clear-cache
```

## **Alternative Solution: Use Git Archive**

Create a clean archive without Windows paths:

### Step 1: Create Git Archive

```bash
git archive --format=zip -o meetrix-build.zip HEAD
```

### Step 2: Extract to New Location

```powershell
# Extract to a clean path
Expand-Archive -Path meetrix-build.zip -DestinationPath C:\temp\meetrix-clean -Force
cd C:\temp\meetrix-clean
```

### Step 3: Initialize Git (if needed)

```bash
git init
git add .
git commit -m "Clean build"
```

### Step 4: Build from Clean Location

```bash
npx eas-cli build --platform android --profile preview --clear-cache
```

## **Alternative Solution: Use Local Build**

Build on your machine (requires Android Studio):

### Step 1: Prebuild

```bash
npx expo prebuild --platform android
```

### Step 2: Build Locally

```bash
cd android
.\gradlew assembleRelease
```

APK will be in: `android\app\build\outputs\apk\release\app-release.apk`

## **Alternative Solution: Use WSL**

If you have Windows Subsystem for Linux:

### Step 1: Open WSL Terminal

```bash
# Access Windows drive from WSL
cd /mnt/x/code/meetrix_new
```

### Step 2: Build from WSL

```bash
npx eas-cli build --platform android --profile preview
```

Building from WSL avoids Windows path issues.

## Recommended Order to Try

1. **Move project to shorter path** (C:\meetrix) - Most reliable
2. **Use WSL** (if available) - Clean solution
3. **Local build** (requires Android Studio) - Fastest if setup
4. **Git archive method** - Manual but works

## Why Moving Works

Shorter paths reduce the chance of path preservation issues. The path `C:\meetrix` is less likely to cause issues than `X:\code\meetrix_new`.

## After Moving Project

Once moved:

1. **Verify package.json exists:**
   ```bash
   dir package.json
   ```

2. **Verify git still works:**
   ```bash
   git status
   ```

3. **Build:**
   ```bash
   npx eas-cli build --platform android --profile preview --clear-cache
   ```

---

## **Try This First: Move to C Drive**

```powershell
# Move project
Move-Item X:\code\meetrix_new C:\meetrix

# Go to new location
cd C:\meetrix

# Verify files
dir package.json

# Build
npx eas-cli build --platform android --profile preview --clear-cache
```

**This should fix the path issue!** 🚀

