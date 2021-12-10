import {Application, Graphics} from "pixi.js";

export class DrawScoreBoard {
    private readonly drawBoard: Graphics;
    private width: number;
    private height: number;
    constructor() {
        this.drawBoard = new Graphics();
    }

    draw(color: any, colorOpacity: number, borderThickness: number, borderColor: any, x: number, y: number, width: number, height: number, borderRadius: number): Graphics {
        this.drawBoard.beginFill(color, colorOpacity);
        this.drawBoard.lineStyle(borderThickness, borderColor);
        this.drawBoard.drawRoundedRect(x, y, width, height, borderRadius);
        this.drawBoard.endFill();

        this.width = width;
        this.height = height;

        return this.drawBoard;
    }

    appendBoard(app: Application): void {
        app.stage.addChild(this.drawBoard);
    }

    getGraphics(): Graphics {
        return this.drawBoard;
    }

    getParameter(): object {
        return {
            width: this.width,
            heigth: this.height,
        }
    }
}