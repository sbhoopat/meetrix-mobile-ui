# Adding Your Meetrix Logo

To use your Meetrix logo as the app icon, follow these steps:

## Quick Setup Using Online Tool

1. **Go to [AppIcon.co](https://www.appicon.co/) or [IconKitchen](https://icon.kitchen/)**

2. **Upload your Meetrix logo:**
   - The logo should show: two hands shaking (forming a heart) with a person icon above
   - Text "Meetrix" in cursive/connected script
   - Deep blue color (#1A3B6A)

3. **Generate all icon sizes** and download

4. **Place files in `assets/` folder:**
   - `icon.png` - 1024x1024px
   - `adaptive-icon.png` - 1024x1024px (same as icon.png)
   - `splash.png` - Use 1284x2778px or similar portrait ratio
   - `favicon.png` - 48x48px (can use simplified logo)

## Manual Creation

### Step 1: Prepare Base Logo

1. Open your logo in an image editor (Photoshop, GIMP, Canva, etc.)
2. Ensure it's on a transparent background or deep blue (#1A3B6A) background

### Step 2: Create icon.png (1024x1024px)

1. Create new image: 1024x1024px
2. Background: Fill with #1A3B6A (deep blue from logo)
3. Place your Meetrix logo in center
4. Add padding around logo (about 10-15% margin)
5. Export as PNG: `assets/icon.png`

### Step 3: Create adaptive-icon.png (1024x1024px)

- Same as icon.png for Android
- Export as: `assets/adaptive-icon.png`

### Step 4: Create splash.png (1284x2778px or similar)

1. Create new image with portrait orientation (9:16 ratio)
   - Recommended: 1284x2778px
   - Or: 1080x1920px, 1242x2688px, etc.
2. Background: Fill with #1A3B6A
3. Place Meetrix logo centered
4. Export as PNG: `assets/splash.png`

### Step 5: Create favicon.png (48x48px)

1. Create new image: 48x48px
2. Use simplified version of logo or just the icon part
3. Background: Transparent or #1A3B6A
4. Export as PNG: `assets/favicon.png`

## Using Command Line (ImageMagick)

If you have ImageMagick installed:

```bash
# Create icon.png
convert your-logo.png -resize 900x900 -background "#1A3B6A" -gravity center -extent 1024x1024 assets/icon.png

# Copy for adaptive-icon
cp assets/icon.png assets/adaptive-icon.png

# Create splash.png
convert your-logo.png -resize 800x800 -background "#1A3B6A" -gravity center -extent 1284x2778 assets/splash.png

# Create favicon.png
convert your-logo.png -resize 48x48 assets/favicon.png
```

## Logo Description

Your Meetrix logo contains:
- **Icon**: Two hands shaking, forming an inverted heart shape
- **Top Element**: Person icon (circle head, curved shoulders, small circle on top)
- **Text**: "Meetrix" in elegant cursive/connected script
- **Color**: Deep blue (#1A3B6A)

## Testing

After adding the logo files:

1. Restart the development server:
   ```bash
   npm start -- --clear
   ```

2. The app will now use your custom icons

## Notes

- Icons should have appropriate padding (safe area)
- Ensure logo is readable at small sizes
- Use high-quality PNG files
- Keep file sizes reasonable (< 500KB per icon)

## Temporary Solution

If you need to test the app before adding logos, Expo will use default icons. The app will work fine, but you should replace them before production release.

