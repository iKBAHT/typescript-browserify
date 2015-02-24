/// <reference path="../../../../reference.ts" />
var dependency = require("../../1/tsmodule/tsmoduleDependency");
function tsmoduleFunction(what) {
    console.log("tsmoduleFunction called");
    dependency.sayIt(what);
}
exports.tsmoduleFunction = tsmoduleFunction;
//# sourceMappingURL=tsmodule.js.map