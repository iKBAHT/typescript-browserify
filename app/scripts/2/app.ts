/// <reference path="../../../reference.ts" />

import houseFile = require('tsmodule/house');

export function createHouse(door) {
    var house = new houseFile.House(door);
    house.build();
    house.addElevator();
}