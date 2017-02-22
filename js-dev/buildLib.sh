#!/bin/bash

printf "Adding the priority libraries..."
cat priority/fetch.js >> ../js/libraries.js
printf "done\n"

printf "Adding the normal libraries..."
cat normal/* >> ../js/libraries.js
printf "done\n"

printf "Adding main.js..."
cat priority/main.js >> ../js/libraries.js
printf "done\n"

printf "Uglifying lib...\n"
uglifyjs ../js/libraries.js --compress --stats -o ../js/libraries.min.js
printf "done\n"

printf "Deleting uncompressed lib..."
rm ../js/libraries.js
printf "done\n"
