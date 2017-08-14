#!/bin/bash

echo "Start deployment"
echo "pulling source code..."
git reset --hard origin/master
git clean -f
git pull
git checkout dev
echo "pulling success && start build"
npm i
npm run build
echo "build success && restart node"
pm2 restart npm
echo "Finished."
