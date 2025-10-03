#!/bin/bash

# Install dependencies
npm install

# Build the project
npm run build

# Copy built files to deployment directory
cp -r dist/* $DEPLOYMENT_TARGET/
