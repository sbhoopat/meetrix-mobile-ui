@echo off
echo ========================================
echo   Meetrix Mobile App - Clean Build
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
echo Current directory: %CD%
echo.

echo ========================================
echo   Building APK with Clean Cache
echo ========================================
echo.
echo This will clear EAS cache and rebuild
echo This will take 10-15 minutes...
echo.

call npx eas-cli build --platform android --profile preview --clear-cache

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Build failed. Check the error messages above.
    echo.
    echo Try these solutions:
    echo 1. Make sure you're in the project root: %CD%
    echo 2. Verify package.json exists: dir package.json
    echo 3. Check git status: git status
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Build Complete!
echo ========================================
echo.
echo Your APK is ready. Check the URL above for download.
echo.
pause

