/// <reference path="../../../reference.ts" />

import tsmodule = require('../common/tsmodule/tsmodule');

export function start() {

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