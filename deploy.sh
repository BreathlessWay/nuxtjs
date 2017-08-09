#!/bin/bash

echo "Start deployment"
echo "pulling source code..."
git help
git pull
git checkout dev
npm i
npm run build
/root/node/pm2 restart npm
echo "Finished."
