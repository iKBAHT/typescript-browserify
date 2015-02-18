var newJsDependency = require('newJsDependency');
module.exports = {
  newJsFunction: function (what) {
    console.log("newJsFunction called");
    newJsDependency.sayIt(what);
  }
};