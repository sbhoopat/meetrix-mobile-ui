@echo off
echo ========================================
echo   Setup Keystore for Preview Profile
echo ========================================
echo.
echo IMPORTANT: Do this BEFORE clicking "Build From GitHub"!
echo.
echo This will set up the keystore for preview profile
echo so that GitHub builds work without prompts.
echo.
echo You MUST run this interactively FIRST.
echo After this, you can click "Build From GitHub" button.
echo.
pause

echo.
echo ========================================
echo   Step-by-Step Guide
echo ========================================
echo.
echo When the command prompts you:
echo.
echo   1. Select "preview" profile (use arrow keys, press Enter)
echo.
echo   2. Select "Keystore: Manage everything needed to build..."
echo      (should be first option, press Enter)
echo.
echo   3. Select "Set up a new keystore" (if first time)
echo      OR "Change default keystore" (if you have existing one)
echo      (press Enter)
echo.
echo   4. If creating new: Select "Yes" when asked to generate
echo.
echo   5. Select "Yes" when asked to set as default
echo.
echo   6. Done! You'll see success message
echo.
pause

echo.
echo ========================================
echo   Running: eas credentials --platform android
echo ========================================
echo.
echo Follow the prompts above...
echo.
pause

call eas credentials --platform android

echo.
echo ========================================
echo   Setup Complete!
echo ========================================
echo.
echo If keystore is set up successfully, you can now:
echo   1. Go to Expo Dashboard
echo   2. Click "Build From GitHub" button
echo   3. Select "Preview" environment
echo   4. Build will work! ✅
echo.
pause

