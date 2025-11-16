# Fast Local APK Build

## Why It's Slow

1. **First prebuild**: Downloads React Native dependencies (100+ MB)
2. **Gradle first build**: Downloads Android dependencies (200+ MB)
3. **Compilation**: Compiles all native code
4. **Total time**: 10-20 minutes for first build

## Faster Option: Use EAS Local Build

EAS local build is faster and handles everything automatically:

```bash
npx eas-cli build --platform android --profile preview --local
```

This will:
- ✅ Use your local Android Studio setup
- ✅ Handle keystore automatically
- ✅ Build faster than manual Gradle
- ✅ Generate signed APK

## Even Faster: Use Cloud Build (After Keystore Setup)

Once keystore is set up for preview profile:

```bash
npx eas-cli build --platform android --profile preview
```

Cloud build is often faster (5-10 minutes) and doesn't use your machine resources.

## Quick Fix: Set Up Keystore for Preview

The fastest path forward:

1. **Install EAS CLI globally** (as ChatGPT suggested):
   ```bash
   npm install -g eas-cli
   ```

2. **Set up keystore for preview**:
   ```bash
   eas credentials --platform android
   ```
   - Select "preview" profile
   - Set up keystore

3. **Build from cloud**:
   ```bash
   eas build --platform android --profile preview
   ```

## Current Status

- ✅ Java installed
- ✅ Android folder exists
- ✅ Gradle working
- ⏳ Prebuild takes time (normal for first build)
- ⚠️ Need keystore for preview profile

---

## Recommendation

**Fastest approach:**
1. Install EAS CLI globally: `npm install -g eas-cli`
2. Set up keystore for preview profile
3. Build from cloud (faster than local first build)

**Or wait for local build to complete** (10-20 minutes first time, then 2-5 minutes)

