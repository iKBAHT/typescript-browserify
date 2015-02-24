/// <reference path="../../../../reference.ts" />

import houseFile = require("../../common/tsmodule/house");

export class House extends houseFile.House {
    public addElevator() {
        console.log('elevator added');
    }
}