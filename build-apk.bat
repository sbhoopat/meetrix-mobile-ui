@echo off
echo ========================================
echo   Meetrix Mobile App - APK Builder
echo ========================================
echo.

REM Set Node.js path
set "PATH=C:\Program Files\nodejs;%PATH%"

echo Checking Node.js...
node --version
if %ERRORLEVEL% NEQ 0 (
    echo Error: Node.js not found!
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Step 1: Login to Expo (Required)
echo ========================================
echo.
echo If you don't have an Expo account:
echo 1. Visit https://expo.dev/signup
echo 2. Create a free account
echo 3. Return here and continue
echo.
pause

echo.
echo Logging in to Expo...
call npx eas-cli login

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Login failed. Please try again.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Step 2: Initialize EAS Project
echo ========================================
echo.
echo Configuring EAS project (one-time setup)...
call npx eas-cli init --non-interactive --force

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo EAS init failed. Please try again.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Step 3: Building APK
echo ========================================
echo.
echo This will take 10-15 minutes...
echo Building in the cloud (no Android Studio needed)
echo.

call npx eas-cli build --platform android --profile preview --non-interactive

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Build failed. Check the error messages above.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Build Complete!
echo ========================================
echo.
echo Your APK is being built. You'll receive:
echo - A URL in the terminal above
echo - An email notification (if configured)
echo.
echo To download your APK:
echo 1. Visit the URL shown above, OR
echo 2. Go to https://expo.dev/accounts/YOUR_ACCOUNT/projects/meetrix-mobile/builds
echo.
pause

