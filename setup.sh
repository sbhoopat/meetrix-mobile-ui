#!/bin/bash

echo "========================================"
echo "  Meetrix Mobile App - Setup Script"
echo "========================================"
echo ""

echo "Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "Error: Failed to install dependencies"
    exit 1
fi

echo ""
echo "========================================"
echo "  Setup Complete!"
echo "========================================"
echo ""
echo "Next steps:"
echo "1. Add your logo files to the assets/ folder:"
echo "   - icon.png (1024x1024)"
echo "   - adaptive-icon.png (1024x1024)"
echo "   - splash.png (1284x2778)"
echo "   - favicon.png (48x48)"
echo ""
echo "2. Run 'npm start' to start the development server"
echo ""
echo "3. Press 'a' for Android or 'i' for iOS simulator"
echo "   Or scan QR code with Expo Go app on your phone"
echo ""

