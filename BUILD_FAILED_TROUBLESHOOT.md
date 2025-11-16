# Build Failed - Troubleshooting Guide

## Current Status

Your build **started successfully** but **failed during the build process**:
- ✅ Project uploaded (5.3 MB)
- ✅ Build ID: `2bd35d68-6300-4f35-b30a-f036016b5e5b`
- ❌ Build failed with "Unknown error"

## Step 1: Check Build Logs

**View detailed logs at:**
https://expo.dev/accounts/sbhoopat/projects/meetrix-mobile/builds/2bd35d68-6300-4f35-b30a-f036016b5e5b

The logs will show exactly what went wrong. Common issues:

### Common Issues to Look For:

1. **Missing Icon Files**
   - Error: "icon.png not found"
   - Solution: Ensure `assets/icon.png` exists (1024x1024px)

2. **Node Version Issues**
   - Error: "Unsupported Node version"
   - Solution: Check package.json dependencies

3. **Dependency Conflicts**
   - Error: "Package conflicts" or "Cannot resolve module"
   - Solution: Check node_modules or update dependencies

4. **Build Configuration**
   - Error: "Invalid build profile" or "Missing configuration"
   - Solution: Check eas.json configuration

5. **Memory/Resource Limits**
   - Error: "Out of memory" or "Build timeout"
   - Solution: Usually resolves on retry (rare on free tier)

## Step 2: Quick Fixes to Try

### Fix 1: Ensure All Assets Exist

Check if all required files are in `assets/` folder:

```bash
# Check if icon files exist
dir assets
```

You should see:
- `icon.png` (1024x1024)
- `adaptive-icon.png` (1024x1024)
- `splash.png` (portrait orientation)
- `favicon.png` (48x48)

### Fix 2: Verify app.json Configuration

The app.json looks correct, but verify:
- Icon paths are correct
- All required fields are present
- Bundle identifier is valid

### Fix 3: Check Package Dependencies

Run:
```bash
npm install
npm audit fix
```

### Fix 4: Update appVersionSource (Warning Fix)

The build shows this warning:
```
The field "cli.appVersionSource" is not set, but it will be required in the future.
```

Add this to `app.json` in the `expo` section:
```json
"expo": {
  ...
  "extra": {
    "eas": {
      "projectId": "6382cb7a-5e0c-4569-ae9c-80e9953c6e7c"
    }
  },
  "owner": "sbhoopat"
}
```

Actually, you already have this! The warning is just informational.

## Step 3: Retry Build

After checking logs and making any fixes, retry:

```bash
npx eas-cli build --platform android --profile preview
```

## Step 4: Alternative Build Profile

If preview profile fails, try production:

```bash
npx eas-cli build --platform android --profile production
```

## Checking Build Logs Online

1. Go to: https://expo.dev/accounts/sbhoopat/projects/meetrix-mobile/builds
2. Click on the failed build (2bd35d68-6300-4f35-b30a-f036016b5e5b)
3. View the detailed logs
4. Look for error messages (usually in red)
5. Share the error message for specific help

## Most Likely Issues

Based on common build failures:

### 1. Icon/Splash Screen Issues (Most Common)
- **Check**: Are all icon files in `assets/` folder?
- **Fix**: Ensure files exist and are correct size

### 2. Dependency Issues
- **Check**: Are all npm packages compatible?
- **Fix**: Update dependencies or remove conflicting packages

### 3. Configuration Errors
- **Check**: Is app.json valid JSON?
- **Fix**: Validate JSON syntax

## Next Steps

1. **Check the build logs** at the URL above
2. **Look for specific error messages** (usually near the end of logs)
3. **Try the fixes** listed above
4. **Retry the build**

## Get Help

If you share the specific error from the build logs, I can provide more targeted help!

---

**Action Item**: Visit the build logs URL and share the error message you see.

