#!/bin/bash

echo "Start deployment"
echo "pulling source code..."
git help
git pull
/root/node/lib/node_modules/npm i
/root/node/lib/node_modules/npm run build
/root/node/pm2 restart npm
echo "Finished."
