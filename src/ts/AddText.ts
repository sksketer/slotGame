import {Text } from "pixi.js";

export class AddText {
    private readonly textData: Text;
    protected style: object;

    constructor(text: string) {
        this.textData = new Text(text, this.setStyle());
    }

    setStyle(): object {
        return this.style;
    }
}