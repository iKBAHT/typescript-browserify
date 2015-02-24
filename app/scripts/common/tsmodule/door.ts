/// <reference path="../../../../reference.ts" />
export class Door {
    private color: string;
    constructor(color) {
        this.color = color;
    }
    public getColor() : string{
        return this.color;
    }
}
