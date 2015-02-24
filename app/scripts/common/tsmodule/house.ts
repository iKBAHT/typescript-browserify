/// <reference path="../../../../reference.ts" />

import doorFile = require("./door");
export class House {
    private door: doorFile.Door;
    constructor(door) {
        this.door = door;
    }
    public build(){
        console.log('house builded');
        console.log('door color is ' + this.door.getColor());
    }
}