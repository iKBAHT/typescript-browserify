/// <reference path="../../../reference.ts" />
import dependency = require("../tsmodule/tsmoduleDependency");

export function tsmoduleFunction(what:string) {
    console.log("tsmoduleFunction called");
    dependency.sayIt(what);
}