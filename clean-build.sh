#!/bin/bash

echo "Cleaning build cache..."

# Remove build directory
rm -rf build/

# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall (optional, uncomment if needed)
# rm -rf node_modules/
# npm install

# Fresh build
echo "Creating fresh build..."
npm run build

echo "Build completed!"
ls -la build/static/js/
ls -la build/static/css/
