"use strict";
exports.__esModule = true;
var fs = require("fs");
var output = fs.createWriteStream('../data/main.txt');
output.on('finish', function () {
    console.log('input finish');
});
