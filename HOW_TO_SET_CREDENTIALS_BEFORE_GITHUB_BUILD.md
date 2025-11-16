# How to Set Credentials Before Building from GitHub

## Important: Set Up Credentials FIRST

⚠️ **You MUST set up credentials BEFORE clicking "Build From GitHub" button!**

The "Build From GitHub" button can't set up credentials interactively - it runs in non-interactive mode.

## Step-by-Step Process

### Step 1: Set Up Credentials Locally (First Time Only)

**Before clicking "Build From GitHub", run this in your terminal:**

```bash
eas credentials --platform android
```

### Step 2: Follow the Interactive Prompts

When you run the command, you'll see menus. Select these options:

1. **"Which build profile do you want to configure?"**
   - Use arrow keys → Select **"preview"**
   - Press Enter

2. **"What do you want to do?"**
   - Select **"Keystore: Manage everything needed to build your project"**
   - Press Enter

3. **"What do you want to do?"** (in keystore menu)
   - Select **"Set up a new keystore"** (recommended for first time)
   - OR Select **"Change default keystore"** (if you have existing one)
   - Press Enter

4. **If creating new keystore:**
   - It will ask: "Generate a new Android Keystore?"
   - Select **"Yes"** → Press Enter
   - It will generate automatically

5. **"Do you want to set this as your default build credentials?"**
   - Select **"Yes"**
   - Press Enter

6. **Done!** You'll see a success message

### Step 3: Verify Credentials Are Set

To verify credentials are configured:

```bash
eas credentials --platform android
```

Select "preview" profile → You should see:
- ✅ Keystore configured
- ✅ Build credentials listed

### Step 4: NOW Click "Build From GitHub" Button

**After credentials are set up, you can:**

1. Go to Expo Dashboard
2. Click **"Build From GitHub"** button
3. Select **"Preview"** environment/profile
4. Build will work! ✅

## Why This Order?

- **"Build From GitHub" runs in non-interactive mode** → Can't prompt for keystore
- **Credentials must exist before building** → Set up locally first
- **After setup, all builds work** → GitHub, Dashboard, CLI

## Quick Visual Guide

```
1. Open Terminal
   └──> Run: eas credentials --platform android
        └──> Select: preview → Keystore → Set up new
             └──> Success! ✅

2. Go to Expo Dashboard
   └──> Click "Build From GitHub" button
        └──> Select: Preview environment
             └──> Build works! ✅
```

## Summary

1. ✅ **First**: Set up credentials locally (`eas credentials --platform android`)
2. ✅ **Then**: Click "Build From GitHub" button in dashboard
3. ✅ **Result**: Build works without errors!

---

**Set up credentials first, then use "Build From GitHub" button - it will work!** 🚀

