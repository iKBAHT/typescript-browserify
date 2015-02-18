/// <reference path="../../reference.ts" />

import tsmodule = require('tsmodule/tsmodule');

export function start() {

    var $ = require("jquery");
    $(function () {
        $('body').append('hello world');
    });

    var newJs = require('newJs');
    newJs.newJsFunction("what newjs");
    tsmodule.tsmoduleFunction("what ts");
}