/// <reference path="../../../reference.ts" />
var tsmodule = require('../common/tsmodule/tsmodule');
function start() {
    var $ = require("jquery");
    $(function () {
        console.log('---------');
        console.log('dom ready');
    });
    var newJs = require('newJs');
    newJs.newJsFunction("what newjs");
    console.log('---------');
    tsmodule.tsmoduleFunction("what ts");
}
exports.start = start;
//# sourceMappingURL=app.js.map