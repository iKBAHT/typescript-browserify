/// <reference path="../../../../reference.ts" />
var dependencyManager = require("../../dependencymanager");
function tsmoduleFunction(what) {
    console.log("tsmoduleFunction called");
    var dependency = dependencyManager.types.tsmoduleDependency;
    dependency.sayIt(what);
}
exports.tsmoduleFunction = tsmoduleFunction;
//# sourceMappingURL=tsmodule.js.map