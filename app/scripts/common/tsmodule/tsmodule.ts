/// <reference path="../../../../reference.ts" />
import dependencyManager = require("../../dependencymanager");

export function tsmoduleFunction(what:string) {
    console.log("tsmoduleFunction called");
    var dependency = dependencyManager.types.tsmoduleDependency;
    dependency.sayIt(what);
}