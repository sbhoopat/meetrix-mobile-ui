# Initialize EAS Project and Build APK

## Quick Fix: Your EAS Project Needs Initialization

You've successfully logged in! Now you need to initialize the EAS project before building.

## ✅ Run These Commands:

### Step 1: Initialize EAS Project (One-Time Setup)

```bash
npx eas-cli init
```

You'll be prompted:
- **"Would you like to create a project for @sbhoopat/meetrix-mobile?"** → Type `y` and press Enter

This creates/links your project on Expo's servers.

### Step 2: Build APK

After initialization, run:

```bash
npx eas-cli build --platform android --profile preview
```

---

## Or Use the Updated Build Script

I've updated `build-apk.bat` to include the init step automatically. Just run:

```bash
.\build-apk.bat
```

It will now:
1. ✅ Login (you're already logged in, so it will skip or verify)
2. ✅ Initialize EAS project (if needed)
3. ✅ Build your APK

---

## About Expo Pricing (Yes, it's FREE!)

### Free Tier Includes:
- ✅ **EAS Build**: 30 builds per month (more than enough for most projects!)
- ✅ **Expo Go**: Free for development
- ✅ **Updates**: Free OTA updates
- ✅ **Account**: Free Expo account

### Paid Plans:
- **Production**: $29/month - More builds, priority support
- **Enterprise**: Custom pricing - For large teams

**For your use case**: The free tier is perfect! You get 30 builds per month, which is plenty for development and testing.

---

## Summary

Since you're already logged in, just run:

```bash
# Initialize project (one-time)
npx eas-cli init

# Then build APK
npx eas-cli build --platform android --profile preview
```

Or use the updated build script - it handles everything automatically now!

