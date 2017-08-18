#!/bin/bash

echo "Start deployment"
echo "pulling source code..."
pm2 stop npm
git pull
echo "pulling success && start build"
npm i
npm run build
echo "build success && restart node"
pm2 restart npm
echo "Finished."
