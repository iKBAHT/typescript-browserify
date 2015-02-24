/// <reference path="../../../../reference.ts" />
var House = (function () {
    function House(door) {
        this.door = door;
    }
    House.prototype.build = function () {
        console.log('house builded');
        console.log('door color is ' + this.door.getColor());
    };
    return House;
})();
exports.House = House;
//# sourceMappingURL=house.js.map