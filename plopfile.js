const packageGenerator = require("./tools/plop/packageGenerator");

module.exports = function (plop) {
  plop.setGenerator("package", packageGenerator);
};
