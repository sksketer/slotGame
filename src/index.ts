import {Application, Text, Sprite, Texture, Container, Graphics} from "pixi.js";
import {Loader as loader} from "./ts/Loader";
import {DrawScoreBoard} from "./ts/scoreBoard";
import {color as color} from "./enums/color";
import {AddText as addData} from "./ts/AddText";

const width: number = window.innerWidth -20;
const height: number = window.innerHeight - 20;

const sound = new Audio("./src/assets/sounds/startingSound.mp3");

window.addEventListener('load', () => {
    const app = new Application({
        width: width,
        height: height,
        backgroundColor: color.black,
        view: document.getElementById('myCanvas') as HTMLCanvasElement,
    })

    // Canvas Background
    const background: Container = new Container();
    app.stage.addChild(background);
    const backgroundCanvas = new loader();
    const bgPath: string = "./src/assets/background/gameBackground.jpg";
    backgroundCanvas.setPath(bgPath);
    backgroundCanvas.setPosition(app.screen.width/2, app.screen.height/2);
    backgroundCanvas.setScale(1.2);
    backgroundCanvas.setAnchor(0.5);
    background.addChild(backgroundCanvas.getSprite());

    //Top heading
    const heading: Container = new Container();
    app.stage.addChild(heading);
    const topHeading = new loader();
    const headingPath: string = "./src/assets/heading/topHeading.png";
    topHeading.setPath(headingPath);
    topHeading.setPosition(app.screen.width/2, 75);
    topHeading.setScale(0.3);
    topHeading.setAnchor(0.5);
    heading.addChild(topHeading.getSprite());

    //scoreBoard
    const scoreBoard = new DrawScoreBoard();
    scoreBoard.draw(color.red, 0.3, 3, color.black, 150, 510, app.screen.width-(2*150), 115, 20);
    scoreBoard.appendBoard(app);

    //slot board
    const slotBoardCard1 = new DrawScoreBoard();
    slotBoardCard1.draw(color.red, 0.2, 3, color.black, 300, 200, 200, app.screen.height-(2*200), 20);
    slotBoardCard1.appendBoard(app);
    addData.add(slotBoardCard1);

    const slotBoardCard2 = new DrawScoreBoard();
    slotBoardCard2.draw(color.red, 0.2, 3, color.black, 550, 200, 200, app.screen.height-(2*200), 20);
    slotBoardCard2.appendBoard(app);

    const slotBoardCard3 = new DrawScoreBoard();
    slotBoardCard3.draw(color.red, 0.2, 3, color.black, 800, 200, 200, app.screen.height-(2*200), 20);
    slotBoardCard3.appendBoard(app);

    //start button
    const startButton: Container = new Container();
    app.stage.addChild(startButton);
    const strButton = new loader();
    const strButtonPath: string = "./src/assets/buttons/strButton.png";
    strButton.setPath(strButtonPath);
    strButton.setPosition(app.screen.width/2, app.screen.height - 80);
    strButton.setScale(0.3);
    strButton.setAnchor(0.5);
    startButton.addChild(strButton.getSprite());

    let clicked: number = 1;
    document.getElementById('btn').addEventListener("click", () => {
        sound.volume = 0.1;
        if(clicked == 1) {
            sound.play();
            clicked--;
        } else {
            sound.pause();
            clicked++;
        }
    })
})