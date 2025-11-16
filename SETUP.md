# Meetrix Mobile App - Setup Instructions

## Step-by-Step Setup Guide

### Step 1: Install Node.js

Download and install Node.js from [nodejs.org](https://nodejs.org/) (v16 or higher recommended).

Verify installation:
```bash
node --version
npm --version
```

### Step 2: Install Dependencies

Navigate to the project folder and install dependencies:

```bash
cd meetrix_new
npm install
```

This will install:
- Expo SDK
- React Native
- React Navigation
- All required dependencies

### Step 3: Add App Icons

1. **Create your logo files:**
   - Prepare your Meetrix logo (the hands shaking with person icon)
   - Use a graphics editor (Photoshop, GIMP, Canva, etc.)

2. **Create the following files in `assets/` folder:**
   
   **icon.png** (1024x1024px)
   - Square canvas
   - Background: #1A3B6A (deep blue)
   - Your Meetrix logo centered
   - Export as PNG

   **adaptive-icon.png** (1024x1024px)
   - Same as icon.png for Android
   - Make sure logo is centered

   **splash.png** (1284x2778px)
   - Portrait orientation (9:16 ratio)
   - Background: #1A3B6A
   - Your Meetrix logo centered
   - Can be larger, will scale

   **favicon.png** (48x48px)
   - Small web favicon
   - Simplified version of logo

3. **Quick method using online tools:**
   - Go to [www.appicon.co](https://www.appicon.co/)
   - Upload your logo
   - Download all sizes
   - Place in `assets/` folder

### Step 4: Start Development Server

```bash
npm start
```

This will:
- Start the Metro bundler
- Open Expo DevTools in your browser
- Show a QR code

### Step 5: Run on Device/Simulator

#### Option A: Using Expo Go App (Easiest)

**For Android:**
1. Install "Expo Go" from Google Play Store
2. Run `npm start`
3. Press `a` or scan QR code with Expo Go app
4. App will load on your phone

**For iOS:**
1. Install "Expo Go" from App Store
2. Run `npm start`
3. Press `i` or scan QR code with Camera app
4. App will open in Expo Go

#### Option B: Using Android Emulator

1. Install Android Studio
2. Set up Android Virtual Device (AVD)
3. Run `npm run android`
4. App will launch in emulator

#### Option C: Using iOS Simulator (Mac only)

1. Install Xcode
2. Run `npm run ios`
3. App will launch in iOS Simulator

### Step 6: Test the App

1. Navigate through the app:
   - Home screen shows welcome message
   - Transport tab shows transport list
   - Tap a transport to see details
   - Tap "Book Now" to open booking form

2. Test booking:
   - Fill in required fields (Name, Email, Phone)
   - Submit booking
   - See success message with booking ID

### Step 7: Build for Production

#### For Android APK:

```bash
npx expo build:android -t apk
```

Follow the prompts, then download the APK file when ready.

#### For Android App Bundle (Play Store):

```bash
npx expo build:android -t app-bundle
```

#### For iOS (requires Mac):

```bash
npx expo build:ios
```

You'll need an Apple Developer account ($99/year).

## Common Issues & Solutions

### Issue: "Module not found"

**Solution:**
```bash
rm -rf node_modules
npm install
```

### Issue: Metro bundler cache issues

**Solution:**
```bash
npm start -- --reset-cache
```

### Issue: Port already in use

**Solution:**
```bash
# Kill process on port 8081
npx kill-port 8081
npm start
```

### Issue: Android build fails

**Solution:**
1. Ensure Android SDK is installed
2. Check JAVA_HOME environment variable
3. Update Android SDK tools

### Issue: Can't connect to Expo Go

**Solution:**
1. Ensure phone and computer are on same WiFi network
2. Try using tunnel mode: `npm start -- --tunnel`
3. Check firewall settings

## Next Steps

1. **Connect to your API:**
   - Update `src/services/transportService.js`
   - Replace mock data with actual API calls

2. **Customize colors:**
   - Update `src/theme/colors.js`
   - Match your brand colors

3. **Add more features:**
   - User authentication
   - Booking history
   - Push notifications
   - Payment integration

## Support

If you encounter any issues:
1. Check the error message
2. Review Expo documentation
3. Check React Navigation docs
4. Contact development team

Happy coding! 🚀

