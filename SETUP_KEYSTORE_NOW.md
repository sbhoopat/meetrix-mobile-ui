# ⚠️ Action Required: Set Up Keystore for Preview Profile

## Problem

```
Generating a new Keystore is not supported in --non-interactive mode
Error: build:internal command failed.
```

## Why This Happens

The **"preview"** profile doesn't have a keystore configured. When building from GitHub (non-interactive mode), EAS can't prompt to generate one.

## ✅ Solution: Set Up Keystore Interactively (One-Time)

You **MUST** set up the keystore for preview profile **interactively** before building from GitHub.

### Step 1: Run Credentials Command (Interactive)

**Run this in your terminal** (it will prompt you):

```bash
eas credentials --platform android
```

### Step 2: Follow These Prompts

When prompted, select these options:

1. **"Which build profile do you want to configure?"**
   - Use arrow keys to select: **"preview"**
   - Press Enter

2. **"What do you want to do?"**
   - Select: **"Keystore: Manage everything needed to build your project"**
   - Press Enter

3. **"What do you want to do?"** (in keystore menu)
   - Option A: Select **"Set up a new keystore"** → Generate new one
   - Option B: Select **"Change default keystore"** → Select your existing keystore (Build Credentials hP5DvIe65K)
   - Press Enter

4. **"Generate a new Android Keystore?"** (if new)
   - Select: **Yes**
   - Press Enter

5. **"Do you want to set this as your default build credentials?"**
   - Select: **Yes**
   - Press Enter

6. **Confirm everything** → Go back until you exit

### Step 3: Verify Keystore is Set

After setting up, verify it's configured:

```bash
eas credentials --platform android
```

Select "preview" profile - you should see:
- ✅ Keystore configured
- ✅ Build Credentials listed

### Step 4: Build from GitHub (Now Works!)

Once keystore is set up for preview profile, build from GitHub:

**Via Dashboard:**
- Go to: https://expo.dev/accounts/sbhoopat/projects/meetrix-mobile/builds
- Click "Build From GitHub"
- Select **"Preview"** environment
- Build will work without keystore errors!

**Via CLI:**
```bash
eas build --platform android --profile preview
```

## Why This Works

- ✅ **Keystore exists**: Preview profile has keystore configured
- ✅ **Non-interactive works**: No need to generate (already exists)
- ✅ **GitHub builds work**: Can build from GitHub without prompts
- ✅ **One-time setup**: After this, all builds work

## Important Notes

⚠️ **You MUST run this interactively** (in your terminal, not automated)
⚠️ **After setup, ALL builds work** (including from GitHub)
⚠️ **This is one-time only** - future builds won't need prompts

## Quick Summary

1. **Run**: `eas credentials --platform android`
2. **Select**: "preview" profile
3. **Set up**: Keystore (new or existing)
4. **Build**: From GitHub or CLI (now works!)

---

## Next Step

**Run this command now:**

```bash
eas credentials --platform android
```

**Follow the prompts to set up keystore for preview profile, then all builds will work!** 🚀

