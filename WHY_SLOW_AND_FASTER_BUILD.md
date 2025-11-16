# Why Build is Slow & How to Speed It Up

## Why Local Build Takes Time

### 1. **First Build is Always Slow**
- Gradle downloads dependencies (can be 100+ MB)
- Compiles all native code
- Builds all resources
- This is normal for first build (5-15 minutes)

### 2. **Subsequent Builds are Faster**
- Gradle caches dependencies
- Only rebuilds changed files
- Usually 2-5 minutes

### 3. **Current Process**
- `expo prebuild` - Generates native Android code
- `gradlew assembleRelease` - Compiles and builds APK

## How to Speed Up

### Option 1: Use Gradle Daemon (Already Running)
Gradle daemon keeps running in background - this is good!

### Option 2: Build Debug APK (Faster)
Debug builds are faster than release:

```bash
cd android
.\gradlew assembleDebug
```

APK will be at: `android/app/build/outputs/apk/debug/app-debug.apk`

### Option 3: Skip Prebuild (If Already Done)
If `android/` folder already exists, you can skip prebuild:

```bash
cd android
.\gradlew assembleRelease
```

### Option 4: Use EAS Cloud Build (Faster for First Time)
Cloud builds are often faster for first build:
- No dependency downloads on your machine
- Faster compilation in cloud
- But requires keystore setup

## Current Status Check

If prebuild is still running, it's:
- Installing dependencies
- Generating native code
- Syncing configuration

**This is normal and can take 5-10 minutes for first time.**

## Quick Build (If Prebuild is Done)

If `android/` folder exists and is ready:

```bash
cd android
.\gradlew assembleRelease
```

This will build the APK (takes 2-5 minutes).

## Check Build Progress

You can check if Gradle is working:

```bash
cd android
.\gradlew tasks
```

If this works, Gradle is ready. Then build:

```bash
.\gradlew assembleRelease
```

---

**First build is always slow - be patient! Subsequent builds are much faster.** ⏱️

