// index.js - dynamic export for mongodb models
const fs = require("fs");
const path = require("path");
const thisFile = path.basename(module.filename);
let exportObj = {}; // export object

fs
  .readdirSync(__dirname)
  .forEach(function (file) {
    if (file.substring(file.length - 3) === ".js" && file != thisFile) {
      let fileName = "./" + file.substring(0, file.length - 3); // removes .js and adds path prefix
      let keyName = file.substring(1, 0).toUpperCase() + file.substring(1, file.length - 3); // capitalize first letter of key name 
      exportObj[keyName] = require(fileName); // dynamic key creation for export based on file names of folder contents
    }
  });
module.exports = exportObj;