#!/usr/bin/env bash
echo "Creating new JS project: $1"
mkdir $1
SCRIPTDIR="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
DEST="$(pwd)/$1/"
cp $SCRIPTDIR/jsproj/script.test.js $DEST/$1.test.js
cp $SCRIPTDIR/jsproj/script.js $DEST/$1.js
cp $SCRIPTDIR/jsproj/package.json $DEST/ 


sed -i s/script/$1/g $DEST$1.test.js
sed -i s/script/$1/g $DEST$1.js
sed -i s/projectname/$1/g $DEST/package.json

cd $DEST

npm install && npm test