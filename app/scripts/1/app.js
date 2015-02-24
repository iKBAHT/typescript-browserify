/// <reference path="../../../reference.ts" />
var houseFile = require('../common/tsmodule/house');
function createHouse(door) {
    var house = new houseFile.House(door);
    house.build();
}
exports.createHouse = createHouse;
//# sourceMappingURL=app.js.map