# How to Set Up Keystore for GitHub Builds

## Why You Need This

When building from GitHub, EAS runs in **non-interactive mode** and can't prompt you to generate a keystore. You must set it up **locally first** (one time), then all GitHub builds will work.

## Step-by-Step Guide

### Step 1: Run Credentials Command Locally

Open your terminal in this project folder and run:

```bash
eas credentials --platform android
```

### Step 2: Select Preview Profile

You'll see a menu like this:

```
? Which build profile do you want to configure?
❯ preview
  production
  development
```

**Use arrow keys** to select **"preview"** and press **Enter**.

### Step 3: Select Keystore Option

You'll see:

```
? What do you want to do?
❯ Keystore: Manage everything needed to build your project
  Google Service Account Key: Manage Google Play service account
  ...
```

**Select "Keystore"** (should be first option) and press **Enter**.

### Step 4: Set Up Keystore

You'll see:

```
? What do you want to do?
❯ Set up a new keystore
  Change default keystore
  Remove keystore
```

**Choose one:**

**Option A: Set up a new keystore** (if you don't have one)
- Select "Set up a new keystore"
- Press Enter
- It will generate a new keystore automatically

**Option B: Use existing keystore** (if you already have one)
- Select "Change default keystore"
- Press Enter
- Select your existing keystore from the list
- Press Enter

### Step 5: Confirm as Default

You'll be asked:

```
? Do you want to set this as your default build credentials?
❯ Yes
  No
```

**Select "Yes"** and press **Enter**.

### Step 6: Done!

You'll see a success message. Press **Enter** or type **"q"** to exit.

## Verify It's Set Up

To verify the keystore is configured:

```bash
eas credentials --platform android
```

Select "preview" profile → You should see keystore listed.

## Now GitHub Builds Will Work!

After setting up the keystore locally:

✅ **GitHub builds will work** (keystore exists, no prompts needed)
✅ **Dashboard builds will work** (select "Preview" environment)
✅ **CLI builds will work** (`eas build --platform android --profile preview`)

## Important Notes

- ⚠️ **Must run locally first** - Can't set up keystore from GitHub
- ✅ **One-time setup** - After this, all builds work
- ✅ **Works for all builds** - GitHub, Dashboard, CLI

## Quick Command Summary

```bash
# 1. Set up keystore (interactive - run locally)
eas credentials --platform android
# Select: preview → Keystore → Set up new or use existing

# 2. Verify it's set
eas credentials --platform android
# Select: preview → Should see keystore

# 3. Build from GitHub (now works!)
# Via Dashboard: Select "Preview" environment
# Or via CLI: eas build --platform android --profile preview
```

---

**After running `eas credentials --platform android` and setting up keystore for preview profile, all GitHub builds will work!** 🚀

