# Fix: Keystore Generation in Non-Interactive Mode

## Error

```
Generating a new Keystore is not supported in --non-interactive mode
Error: build:internal command failed.
```

## Problem

The build is running in non-interactive mode (from GitHub/CI) and trying to generate a new keystore, which requires interactive prompts.

## Solution

Since you already have a keystore set up (Build Credentials hP5DvIe65K), the build should use the existing one. 

### Option 1: Ensure Keystore is Set for Production Profile

The keystore was set up for the "development" profile. You need to set it for "production" profile too:

**Via Dashboard:**
1. Go to: https://expo.dev/accounts/sbhoopat/projects/meetrix-mobile/credentials
2. Select "production" profile
3. Ensure keystore is assigned
4. Set as default if needed

**Via CLI:**
```bash
npx eas-cli credentials --platform android
```
Then select "production" profile and ensure keystore is assigned.

### Option 2: Build from Local (Interactive)

If building from GitHub continues to fail, build locally:

```bash
npx eas-cli build --platform android --profile production --local
```

This will use your local machine and allow interactive prompts.

### Option 3: Build with Preview Profile (Has Keystore)

Since the keystore is set up for preview/development, try:

```bash
npx eas-cli build --platform android --profile preview
```

## What I Fixed

✅ **Added `appVersionSource`** to `eas.json` to fix the warning
✅ **Updated and pushed** to GitHub

## Next Steps

1. **Set up keystore for production profile** (via dashboard or CLI)
2. **Or build with preview profile** (already has keystore)
3. **Or build locally** (allows interactive prompts)

## Recommended: Use Preview Profile

Since preview profile has the keystore set up, build with:

```bash
npx eas-cli build --platform android --profile preview
```

Or in the dashboard, select "preview" environment instead of "production".

---

**The build should work with preview profile since keystore is already configured there!** 🚀

