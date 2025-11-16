# ✅ Fixed: Development Client Build Error

## Error

```
You want to build a development client build for platforms: Android
However, we detected that you don't have expo-dev-client installed for your project.
```

## Problem

You were building with the **"development"** profile which requires `expo-dev-client`. However, you want a regular APK file, not a development client.

## Solution

**For APK builds, use "preview" or "production" profile instead of "development".**

I've updated `eas.json` to fix the development profile. However, **you should use the preview profile** for APK builds.

## How to Build APK Correctly

### Option 1: Use Preview Profile (Recommended)

In Expo Dashboard:
1. When starting a build, select **"Preview"** environment (not "Development" or "Production")
2. This will build a regular APK without requiring `expo-dev-client`

Via CLI:
```bash
npx eas-cli build --platform android --profile preview
```

### Option 2: Use Production Profile

In Expo Dashboard:
1. Select **"Production"** environment (but make sure keystore is set up for production)

Via CLI:
```bash
npx eas-cli build --platform android --profile production
```

## What I Fixed

✅ **Updated development profile** in `eas.json` to build APK instead of dev client
✅ **Pushed changes** to GitHub

## Profile Differences

- **development**: Requires `expo-dev-client` - for development/testing with Expo Go features
- **preview**: Regular APK/AAB - for testing and distribution ✅ **Use this for APK**
- **production**: Regular APK/AAB - for Play Store release ✅ **Use this for release**

## Next Steps

1. **Build with Preview Profile:**
   ```bash
   npx eas-cli build --platform android --profile preview
   ```

2. **Or in Dashboard:** Select "Preview" environment when starting build

**This should work now! The preview profile will build a regular APK without requiring expo-dev-client.** 🚀

---

## Alternative: Install expo-dev-client (Only if you need development builds)

If you actually want development client builds (not regular APK), install:

```bash
npm install expo-dev-client
```

But for regular APK files, just use the **preview** profile instead!

