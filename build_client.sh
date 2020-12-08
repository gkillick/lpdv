# bin/bash

echo Building Client
npm build --prod

echo Moving Client to server folder
mv dist/ server/


