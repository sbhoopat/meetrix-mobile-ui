# Fix: Keystore Not Set for Preview Profile (Non-Interactive Mode)

## Error

```
Generating a new Keystore is not supported in --non-interactive mode
Error: build:internal command failed.
```

## Problem

The "preview" profile doesn't have a keystore configured. When building from GitHub (non-interactive mode), EAS can't prompt to generate one.

## Solution: Set Up Keystore Interactively First

You **must** set up the keystore for preview profile **interactively** before building from GitHub.

### Step 1: Set Up Keystore for Preview Profile (Interactive)

Run this command in your terminal (it will prompt you):

```bash
eas credentials --platform android
```

When prompted:

1. **"Which build profile do you want to configure?"**
   - Select: **"preview"** (use arrow keys, press Enter)

2. **"What do you want to do?"**
   - Select: **"Keystore: Manage everything needed to build your project"**

3. **"What do you want to do?"** (in keystore menu)
   - Select: **"Change default keystore"** OR **"Set up a new keystore"**
   - If using existing: Select your keystore (Build Credentials hP5DvIe65K)
   - If new: Generate a new one

4. **"Do you want to set this as your default build credentials?"**
   - Select: **Yes**

5. Confirm everything

### Step 2: Verify Keystore is Set

After setting up, verify:

```bash
eas credentials --platform android
```

Select "preview" profile - you should see keystore configured.

### Step 3: Build from GitHub (Non-Interactive)

Once keystore is set up for preview profile:

**Via Dashboard:**
- Select "Preview" environment
- Build from GitHub

**Via CLI:**
```bash
eas build --platform android --profile preview
```

## Why This Fix Works

- **Keystore exists**: Preview profile has keystore configured
- **Non-interactive works**: No need to generate (already exists)
- **GitHub builds work**: Can build from GitHub without prompts

## Important

You **MUST** run the credentials command **interactively** (not in non-interactive mode) to set up the keystore. After that, all builds (including from GitHub) will work.

---

## Quick Summary

1. **Run interactively**: `eas credentials --platform android`
2. **Select**: "preview" profile
3. **Set up**: Keystore (use existing or create new)
4. **Build**: From GitHub or CLI (now works in non-interactive mode)

**After setting up keystore once, all future builds will work!** 🚀

