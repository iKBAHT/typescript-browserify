/// <reference path="../reference.ts" />
var tsmodule = require('scripts/common/tsmodule/tsmodule');
var doorFile = require('scripts/common/tsmodule/door');
var dependencyManager = require('scripts/dependencymanager');
var newJs = require('newJs');
newJs.newJsFunction("from newjs");
console.log('---------');
tsmodule.tsmoduleFunction("from ts");
console.log('---------');
var door = new doorFile.Door('red');
dependencyManager.types.app.createHouse(door);
var $ = require("jquery");
$(function () {
    console.log('---------');
    dependencyManager.types.domExtensions.addMenu();
});
//# sourceMappingURL=main.js.map