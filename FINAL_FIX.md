# Final Fix: Windows Absolute Path Issue

## Problem

Build keeps failing with:
```
package.json does not exist in /home/expo/workingdir/build/X:/code/meetrix_new
```

## Root Cause

EAS Build is preserving the Windows absolute path `X:/code/meetrix_new` when creating the build archive, which doesn't work on Linux build servers.

## Solution: Build with Clear Cache

I've created a build script that clears the cache. Use this:

### Option 1: Use the Clean Build Script

```bash
.\BUILD_WITH_CLEAR_CACHE.bat
```

This script:
- ✅ Clears EAS build cache
- ✅ Builds with fresh state
- ✅ Should fix the path issue

### Option 2: Manual Command

Run this command:

```bash
npx eas-cli build --platform android --profile preview --clear-cache
```

The `--clear-cache` flag forces EAS to rebuild from scratch without any cached path information.

## Alternative Solutions

### Solution A: Move Project to Shorter Path

If the path issue persists, try moving your project to a shorter path:

```bash
# Instead of X:\code\meetrix_new
# Use something like: C:\projects\meetrix
```

Windows paths with drive letters can sometimes cause issues.

### Solution B: Use WSL (Windows Subsystem for Linux)

If you have WSL installed:

```bash
# In WSL
cd /mnt/x/code/meetrix_new
npx eas-cli build --platform android --profile preview
```

Building from WSL might avoid Windows path issues.

### Solution C: Use Local Build (Requires Android Studio)

If cloud build continues to fail:

```bash
npx eas-cli build --platform android --profile preview --local
```

This builds on your machine (requires Android Studio setup).

## What I've Updated

1. ✅ Updated `eas.json` with build environment settings
2. ✅ Created `.easignore` to exclude unnecessary files
3. ✅ Created clean build script with `--clear-cache`
4. ✅ Ensured all files are committed to git

## Try This First

```bash
# Make sure you're in the project root
cd X:\code\meetrix_new

# Verify package.json exists
dir package.json

# Build with clear cache
npx eas-cli build --platform android --profile preview --clear-cache
```

## If Still Fails

1. **Check build logs** at: https://expo.dev/accounts/sbhoopat/projects/meetrix-mobile/builds
2. **Try moving project** to a different location (shorter path)
3. **Use WSL** if available
4. **Use local build** as last resort

---

**Try the `--clear-cache` flag first - this should fix the path issue!** 🚀

