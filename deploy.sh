#!/bin/bash

echo "Start deployment"
echo "pulling source code..."
git reset --hard origin/master
git clean -f
git pull
git checkout dev
rm -rf ./.nuxt/
npm i
npm run build
/root/node/bin/pm2 restart npm
echo "Finished."
