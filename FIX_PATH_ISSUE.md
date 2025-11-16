# Fix: Build Path Issue with Windows Absolute Path

## Problem

Build failing with:
```
package.json does not exist in /home/expo/workingdir/build/X:/code/meetrix_new
```

The Windows absolute path `X:/code/meetrix_new` is being preserved in the Linux build environment.

## Solutions to Try

### Solution 1: Use Relative Paths (Recommended)

Make sure you're running the build command from the project root directory:

```bash
# Make sure you're in the project root
cd X:\code\meetrix_new

# Verify package.json exists
dir package.json

# Then build
npx eas-cli build --platform android --profile preview
```

### Solution 2: Clean Git Repository

Sometimes git metadata can preserve absolute paths. Try:

```bash
# Make sure everything is committed
git add .
git commit -m "Ensure all files are committed"

# Check what's being tracked
git ls-files | Select-String "package.json"
```

### Solution 3: Build Without Git (Alternative)

If the path issue persists, try building without using git:

```bash
npx eas-cli build --platform android --profile preview --local
```

**Note:** `--local` builds on your machine, which requires Android Studio setup.

### Solution 4: Use EAS Build with Archive

Try building with explicit archive:

```bash
# Create an archive first
npx eas-cli build --platform android --profile preview --clear-cache
```

### Solution 5: Check Working Directory

The issue might be environment-related. Make sure:

1. You're in the correct directory when running build
2. No environment variables are set with absolute paths
3. Git is configured correctly

## What I've Done

1. ✅ Created `.easignore` to exclude unnecessary files
2. ✅ Updated `eas.json` with build environment settings
3. ✅ Ensured all files are committed to git
4. ✅ Verified `package.json` is tracked in git

## Next Steps

1. **Try Solution 1 first** - Make sure you're in the right directory
2. **Check build logs** - See if there's more information about the path issue
3. **Try Solution 3** - Use local build as a workaround (requires Android Studio)
4. **Contact Expo Support** - If the issue persists, this might be a bug

## Build Command

```bash
npx eas-cli build --platform android --profile preview
```

If it still fails, try:
```bash
npx eas-cli build --platform android --profile preview --clear-cache
```

## Alternative: Use Expo Build Service (Legacy)

If EAS Build continues to have path issues, you could try the legacy build:

```bash
npx expo build:android -t apk
```

**Note:** This is deprecated but might work better with Windows paths.

---

**The most likely fix is to ensure you're in the project root when running the build command!**

