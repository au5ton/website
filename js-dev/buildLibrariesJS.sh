#!/bin/bash

printf "Adding priority JS..."
cat priority/jquery-2.2.4.min.js priority/materialize.min.js priority/d3.v3.min.js > ../js/libraries.js
printf "done\n"
cd normal
printf "Adding the other libraries..."
cat * >> ../../js/libraries.js
printf "done\n"
cd ..
printf "Adding main.js..."
cat priority/main.js >> ../js/libraries.js
printf "done\n"

uglifyjs ../js/libraries.js --compress -o ../js/libraries.min.js
