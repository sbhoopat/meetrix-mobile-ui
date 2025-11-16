# Fix: Keystore Generation Issue

## Problem

The build failed with this error:
```
Generating a new Keystore is not supported in --non-interactive mode
```

## Solution

The build script has been updated to allow interactive prompts for keystore generation. Here's what changed:

### What I Fixed:

1. **Removed `--non-interactive` flag** from the build command
2. **Added a credentials check step** before building
3. **Now the build can prompt** you to generate a keystore

### How to Build Now:

#### Option 1: Run the Updated Build Script

```bash
.\build-apk.bat
```

When prompted about keystore:
- **"Generate a new Android Keystore?"** → Type `y` or press Enter
- This will create the keystore automatically

#### Option 2: Setup Keystore First (Recommended)

Run these commands manually:

**Step 1: Setup Android credentials**
```bash
npx eas-cli credentials --platform android
```

When prompted:
- Choose **"Set up a new Android Keystore"**
- It will generate and store the keystore on Expo's servers

**Step 2: Build APK**
```bash
npx eas-cli build --platform android --profile preview
```

---

## What is a Keystore?

A keystore is a file used to sign your Android app. It's required for:
- ✅ Installing the app on devices
- ✅ Publishing to Google Play Store
- ✅ Ensuring app updates work correctly

**Important:** 
- The keystore is stored securely on Expo's servers
- You don't need to manage it manually
- It's generated once and reused for future builds

---

## Quick Build (After Keystore Setup)

Once the keystore is set up, you can build with:

```bash
npx eas-cli build --platform android --profile preview
```

The build will take **10-15 minutes** and happen in the cloud.

---

## Summary

**The build script is now fixed!** Just run:

```bash
.\build-apk.bat
```

When it asks about keystore generation, say **yes** - it will handle everything automatically.

