# Quick Build Commands

## Manual Build Commands (If Script Doesn't Work)

If you prefer to run commands manually, here's the sequence:

### Step 1: Login (already done - you can skip this)
```bash
npx eas-cli login
```

### Step 2: Initialize EAS Project (One-Time)
```bash
npx eas-cli init --force
```

When prompted:
- "Would you like to create a project for @sbhoopat/meetrix-mobile?" → Type `y`

Or use non-interactive mode:
```bash
npx eas-cli init --non-interactive --force
```

### Step 3: Build APK
```bash
npx eas-cli build --platform android --profile preview
```

---

## Or Use the Updated Build Script

Just run:
```bash
.\build-apk.bat
```

The script now includes the `--force` flag and will:
1. ✅ Login (verify you're logged in)
2. ✅ Initialize EAS project with `--force` flag
3. ✅ Build your APK

---

## What Changed?

The error you saw was:
```
Project does not exist: @sbhoopat/meetrix-mobile. Use --force flag to create this project.
```

**Solution:** Added `--force` flag to `eas init` command, which allows it to create a new project without prompting.

---

## After Build Completes

1. **Download URL** will appear in terminal
2. **Email notification** (if configured)
3. **Or visit:** https://expo.dev/accounts/sbhoopat/projects/meetrix-mobile/builds

Then download and install the APK on your Android device!

