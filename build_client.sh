# bin/bash

echo Building Client
npm run build

echo Moving Client to server folder
mv dist/ server/


