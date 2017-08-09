#!/bin/bash

echo "Start deployment"
echo "pulling source code..."
git checkout dev
git pull origin dev
npm i
npm run build
/root/node/pm2 restart npm
echo "Finished."
