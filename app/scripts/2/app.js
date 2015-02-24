/// <reference path="../../../reference.ts" />
var houseFile = require('tsmodule/house');
function createHouse(door) {
    var house = new houseFile.House(door);
    house.build();
    house.addElevator();
}
exports.createHouse = createHouse;
//# sourceMappingURL=app.js.map