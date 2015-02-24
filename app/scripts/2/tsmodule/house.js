/// <reference path="../../../../reference.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var houseFile = require("../../common/tsmodule/house");
var House = (function (_super) {
    __extends(House, _super);
    function House() {
        _super.apply(this, arguments);
    }
    House.prototype.addElevator = function () {
        console.log('elevator added');
    };
    return House;
})(houseFile.House);
exports.House = House;
//# sourceMappingURL=house.js.map