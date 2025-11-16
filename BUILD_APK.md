# Building APK for Meetrix Mobile App

## Method 1: Using EAS Build (Recommended - Cloud Build)

EAS Build is the recommended way to build APKs for Expo apps. It builds in the cloud and doesn't require Android Studio.

### Step 1: Login to Expo

```bash
eas login
```

You'll need to create an Expo account (free) if you don't have one.

### Step 2: Configure Build

The `eas.json` file is already configured. You can build now.

### Step 3: Build APK

For a preview/test APK:
```bash
eas build --platform android --profile preview
```

For production APK:
```bash
eas build --platform android --profile production
```

### Step 4: Download APK

After build completes (10-15 minutes):
1. You'll get a URL in the terminal
2. Visit the URL or check Expo dashboard
3. Download the APK file
4. Install on your Android device

---

## Method 2: Local Build (Requires Android Studio)

If you prefer to build locally without cloud services:

### Prerequisites

1. **Install Android Studio:**
   - Download from [developer.android.com/studio](https://developer.android.com/studio)
   - Install Android SDK and tools
   - Set up Android Virtual Device (AVD) or connect physical device

2. **Install Java JDK:**
   - Download JDK 17 or later
   - Set JAVA_HOME environment variable

### Step 1: Prebuild Native Folders

```bash
npx expo prebuild --platform android
```

This generates the `android` folder with native code.

### Step 2: Build APK Locally

```bash
cd android
.\gradlew assembleRelease
```

### Step 3: Find APK

The APK will be in:
```
android/app/build/outputs/apk/release/app-release.apk
```

---

## Method 3: Using Expo Build (Legacy - Deprecated)

**Note:** This method is deprecated but might still work for older Expo versions.

```bash
npx expo build:android -t apk
```

This requires Expo account and builds in the cloud.

---

## Quick Start (EAS Build)

Run these commands:

```bash
# 1. Login to Expo (creates account if needed)
eas login

# 2. Build APK (preview/test version)
eas build --platform android --profile preview

# 3. Wait for build (10-15 minutes)
# 4. Download APK from provided URL
# 5. Install on Android device
```

---

## Installing APK on Android Device

1. **Enable Developer Options:**
   - Go to Settings > About Phone
   - Tap "Build Number" 7 times

2. **Enable Unknown Sources:**
   - Settings > Security
   - Enable "Install from Unknown Sources" or "Install Unknown Apps"

3. **Transfer APK to Phone:**
   - Email it to yourself
   - Use USB cable
   - Use cloud storage (Google Drive, Dropbox)

4. **Install:**
   - Open APK file on phone
   - Tap "Install"
   - Wait for installation
   - Open Meetrix app

---

## Troubleshooting

### EAS Build Issues

**Problem:** Build fails with authentication error
**Solution:** Run `eas login` again

**Problem:** Build takes too long
**Solution:** This is normal for first build (10-15 minutes). Subsequent builds are faster.

**Problem:** APK won't install
**Solution:** 
- Check Android version (requires Android 5.0+)
- Enable "Install from Unknown Sources"
- Try downloading APK again

### Local Build Issues

**Problem:** `expo prebuild` fails
**Solution:** Make sure you have latest Expo CLI: `npm install -g expo-cli`

**Problem:** Gradle build fails
**Solution:**
- Check JAVA_HOME is set correctly
- Update Android SDK tools
- Clean build: `cd android && .\gradlew clean`

---

## Build Configuration

The `eas.json` file is configured with:
- **preview**: For testing (APK format)
- **production**: For release (APK format)

You can customize build settings in `eas.json` if needed.

---

## Next Steps After APK

1. **Test on multiple devices:**
   - Different Android versions
   - Different screen sizes

2. **Update app.json:**
   - Change version number
   - Update app name if needed
   - Update bundle identifier

3. **Release to Google Play Store:**
   - Build AAB instead of APK: Change `buildType` to `app-bundle` in eas.json
   - Follow Google Play Store guidelines
   - Sign up for Google Play Developer account

---

## Summary

**Easiest Method:** Use EAS Build (Method 1)
- No Android Studio needed
- Cloud-based build
- Just run: `eas build --platform android --profile preview`

**Fastest Method:** Local Build (Method 2)
- Requires Android Studio setup
- Builds on your machine
- Faster for multiple builds

Choose the method that works best for you!

