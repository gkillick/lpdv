# bin/bash

echo Building Client
npm run build

rm -r ./server/dist
echo Moving Client to server folder
mv dist/ server/


