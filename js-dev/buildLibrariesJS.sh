#!/bin/bash

printf "Adding priority JS..."
cat priority/jquery-2.2.4.min.js > ../js/libraries.js
cat priority/materialize.min.js >> ../js/libraries.js
printf "done\n"
cd normal
printf "Adding the other libraries..."
cat * >> ../../js/libraries.js
printf "done\n"
cd ..
printf "Adding main.js..."
cat priority/main.js >> ../js/libraries.js
printf "done\n"
printf "Adding gallery.js..."
cat priority/gallery.js >> ../js/libraries.js
printf "done\n"
printf "Uglifying lib...\n"
uglifyjs ../js/libraries.js --compress --mangle --screw-ie8 --stats -o ../js/libraries.min.js
printf "done\n"
printf "Deleting uncompressed lib..."
rm ../js/libraries.js
printf "done\n"
