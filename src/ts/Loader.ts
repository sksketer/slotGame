import {Loader as PixiLoader, Application, Sprite, Texture} from "pixi.js";

export class Loader {
    private readonly _loader: PixiLoader;
    private img: Sprite;
    constructor() {
        this._loader = new PixiLoader();
    }

    getSprite(): Sprite {
        return this.img;
    }

    setPath(path: string): void {
        this.img = new Sprite(Texture.from(path));
    }
    setPosition(x: number, y: number): void {
        this.img.position.set(x, y);
    }
    setScale(x: number): void {
        this.img.scale.set(x);
    }
    setAnchor(x: number): void {
        this.img.anchor.set(x);
    }
    appendImg(app: Application): void {
        app.stage.addChild(this.img);
    }
    appendAny(app: any): void {
        app.addChild(this.img);
    }
    check(): void {
        console.log("loader successful");
        console.log(this.img);
    }
}