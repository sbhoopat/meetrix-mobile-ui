# Meetrix Mobile App

React Native mobile application for Meetrix transportation services.

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (will be installed automatically)
- For iOS: Xcode and iOS Simulator (Mac only)
- For Android: Android Studio and Android Emulator

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add App Icon and Splash Screen:**
   
   Place your Meetrix logo in the `assets` folder:
   - `assets/icon.png` - 1024x1024px PNG (for app icon)
   - `assets/adaptive-icon.png` - 1024x1024px PNG (for Android adaptive icon)
   - `assets/splash.png` - 1284x2778px PNG (for splash screen)
   - `assets/favicon.png` - 48x48px PNG (for web favicon)

   **Quick Icon Generation:**
   - Use your Meetrix logo (hands shaking with person icon above)
   - Recommended background color: #1A3B6A (deep blue from logo)
   - Ensure the logo is centered and has appropriate padding

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Run on device/simulator:**
   - Press `a` for Android
   - Press `i` for iOS
   - Scan QR code with Expo Go app on your phone

## 📱 Building for Production

### Android APK

```bash
npx expo build:android -t apk
```

### Android AAB (for Play Store)

```bash
npx expo build:android -t app-bundle
```

### iOS (requires Mac and Apple Developer account)

```bash
npx expo build:ios
```

## 📂 Project Structure

```
meetrix-mobile/
├── assets/                  # Images, icons, splash screens
│   ├── icon.png            # App icon (1024x1024)
│   ├── adaptive-icon.png   # Android adaptive icon (1024x1024)
│   ├── splash.png          # Splash screen (1284x2778)
│   └── favicon.png         # Web favicon (48x48)
├── src/
│   ├── components/         # Reusable components
│   │   └── Transport/
│   │       └── TransportCard.js
│   ├── screens/            # Screen components
│   │   ├── HomeScreen.js
│   │   ├── TransportScreen.js
│   │   ├── TransportDetailScreen.js
│   │   └── TransportBookingScreen.js
│   ├── navigation/         # Navigation configuration
│   │   └── AppNavigator.js
│   ├── services/           # API services
│   │   └── transportService.js
│   └── theme/              # Theme configuration
│       └── colors.js
├── App.js                  # Root component
├── app.json                # Expo configuration
├── babel.config.js         # Babel configuration
└── package.json            # Dependencies
```

## 🎨 Color Scheme

The app uses the Meetrix brand colors:
- **Primary**: #1A3B6A (Deep blue from logo)
- **Secondary**: #5856D6
- **Success**: #34C759
- **Error**: #FF3B30
- **Background**: #FFFFFF

## ✨ Features

- ✅ Transport listing with pull-to-refresh
- ✅ Transport details view
- ✅ Booking form with validation
- ✅ Modern UI with brand colors
- ✅ Cross-platform (iOS & Android)
- ✅ Responsive design

## 🔧 Configuration

### API Integration

To connect to your backend API, update `src/services/transportService.js`:

```javascript
import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com/api';

export const getTransportList = async () => {
  const response = await axios.get(`${API_BASE_URL}/transport`);
  return response.data;
};

export const bookTransport = async (bookingData) => {
  const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData);
  return response.data;
};
```

### App Configuration

Update `app.json` to customize:
- App name
- Bundle identifier
- Splash screen colors
- Icon paths

## 📱 Installing on Mobile Device

### Using Expo Go (Development)

1. Install Expo Go app from App Store (iOS) or Play Store (Android)
2. Run `npm start`
3. Scan QR code with Expo Go app

### Building Standalone App

1. Build APK/AAB for Android:
   ```bash
   npx expo build:android
   ```
   Then download and install the APK file on your Android device

2. Build IPA for iOS:
   ```bash
   npx expo build:ios
   ```
   Requires Apple Developer account and Mac

### Using EAS Build (Recommended)

1. Install EAS CLI:
   ```bash
   npm install -g eas-cli
   ```

2. Login:
   ```bash
   eas login
   ```

3. Configure build:
   ```bash
   eas build:configure
   ```

4. Build for Android:
   ```bash
   eas build --platform android
   ```

5. Build for iOS:
   ```bash
   eas build --platform ios
   ```

## 🐛 Troubleshooting

### Common Issues

1. **Module not found errors:**
   ```bash
   rm -rf node_modules
   npm install
   ```

2. **Metro bundler cache issues:**
   ```bash
   npm start -- --reset-cache
   ```

3. **Android build errors:**
   - Ensure Android SDK is properly installed
   - Check JAVA_HOME is set correctly

4. **iOS build errors:**
   - Ensure Xcode is installed
   - Run `pod install` in ios folder (if using bare workflow)

## 📝 License

Private - All rights reserved

## 🤝 Support

For issues or questions, please contact the development team.

