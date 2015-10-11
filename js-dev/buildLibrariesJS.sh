#!/bin/bash

cat priority/jquery-2.1.4.min.js priority/materialize.min.js priority/d3.v3.min.js > ../js/libraries.js
cd normal
cat * >> ../../js/libraries.js
cd ..
cat priority/main.js >> ../js/libraries.js
