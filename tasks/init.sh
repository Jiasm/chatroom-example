#!/bin/bash

echo "build project dist";
npm i;
echo "build project dist success";
echo "build server dist";
(cd server && npm i && npm run build);
echo "build server dist success";
echo "build client dist";
(cd client && npm i && npm run build);
echo "build client dist success";

echo "build completed";