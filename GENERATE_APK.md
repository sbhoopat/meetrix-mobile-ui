# Generate APK for Meetrix Mobile App

## Quick Guide to Generate APK

You need to login to Expo first (it's free). Follow these steps:

### Step 1: Login to Expo

Open PowerShell or Command Prompt in the `meetrix_new` folder and run:

```bash
npx eas-cli login
```

You'll be prompted to:
- **Enter email**: Your email address
- **Enter password**: Your password (or create account)

**Don't have an Expo account?**
1. Visit: https://expo.dev/signup
2. Create a free account (takes 1 minute)
3. Come back and run the login command above

### Step 2: Build APK

After login, run:

```bash
npx eas-cli build --platform android --profile preview
```

This will:
- ✅ Build your APK in the cloud (no Android Studio needed!)
- ⏱️ Take 10-15 minutes (first build is slower)
- 📱 Generate a downloadable APK file

### Step 3: Download APK

After the build completes, you'll see:
- A download URL in the terminal
- An email notification (if configured)

**Or find it at:**
- https://expo.dev/accounts/YOUR_USERNAME/projects/meetrix-mobile/builds

### Step 4: Install on Android Device

1. **Transfer APK to your phone:**
   - Email it to yourself
   - Use USB cable
   - Use Google Drive/Dropbox

2. **Enable installation:**
   - Go to Settings > Security
   - Enable "Install from Unknown Sources" or "Install Unknown Apps"

3. **Install:**
   - Open the APK file on your phone
   - Tap "Install"
   - Wait for installation
   - Open "Meetrix" app

---

## Alternative: Use Build Script

I've created a build script for you. Just run:

**Windows:**
```bash
.\build-apk.bat
```

**Mac/Linux:**
```bash
chmod +x build-apk.sh
./build-apk.sh
```

This script will guide you through the process.

---

## Quick Commands Summary

```bash
# 1. Login to Expo
npx eas-cli login

# 2. Build APK (preview/test version)
npx eas-cli build --platform android --profile preview

# 3. Build Production APK (for release)
npx eas-cli build --platform android --profile production
```

---

## Troubleshooting

### Login Issues

**Problem:** Login fails
**Solution:** 
- Make sure you have internet connection
- Try creating account at https://expo.dev/signup first
- Then run `npx eas-cli login` again

### Build Issues

**Problem:** Build fails with "icon.png not found"
**Solution:** Make sure you have icon files in `assets/` folder (they're already there)

**Problem:** Build takes too long
**Solution:** This is normal! First build takes 10-15 minutes. Subsequent builds are faster.

**Problem:** APK won't install
**Solution:**
- Check Android version (requires Android 5.0+)
- Enable "Install from Unknown Sources" in Settings
- Try downloading APK again

---

## What Happens During Build?

1. **Code is uploaded** to Expo's servers
2. **Dependencies are installed** in the cloud
3. **Native Android code is generated**
4. **APK is built** using Android build tools
5. **APK is signed** for distribution
6. **Download link is provided**

---

## Next Steps After APK

1. **Test on multiple devices** - Make sure it works on different Android versions
2. **Update version** - Change version in `app.json` before next build
3. **Release to Google Play Store** - Build AAB instead of APK (change `buildType` to `app-bundle` in `eas.json`)

---

## Need Help?

- Expo Documentation: https://docs.expo.dev/build/introduction/
- EAS Build Guide: https://docs.expo.dev/build/building-on-ci/
- Expo Forums: https://forums.expo.dev/

---

## Summary

**To generate APK now:**

1. Run: `npx eas-cli login` (create account if needed)
2. Run: `npx eas-cli build --platform android --profile preview`
3. Wait 10-15 minutes
4. Download APK from provided URL
5. Install on Android device

**That's it! Your Meetrix mobile app will be ready to install! 🚀**

