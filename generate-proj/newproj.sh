#!/usr/bin/env bash
echo "Creating new JS project: $1"
mkdir $1
SCRIPTDIR="$(readlink -f "$0")"
DEST="$(pwd)/$1/"
cp $SCRIPTDIR/jsproj/script.test.js $DEST/$1.test.js
cp $SCRIPTDIR/jsproj/script.js $DEST/$1.js
cp $SCRIPTDIR/jsproj/package.json $DEST/ 


sed -i s/script/$1/g $DEST$1.test.js
sed -i s/script/$1/g $DEST$1.js
sed -i s/projectname/$1/g $DESTpackage.json

cd $DEST

npm install
