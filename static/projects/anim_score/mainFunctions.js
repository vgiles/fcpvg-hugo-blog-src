
"use strict";

let emitter;
let nodeColour;
let windowTop;
let windowRight;
let windowLeft;
let windowBottom;
let fontLyric;
let fontScoreLabel;
let headerSize = 100;
let footerSize = 80;


//NB Top 70 pixels are HEADER


function setup() {
    scoreLayoutSetup();
    describe('A canvas');
    nodeColour = [random(255), random(255), random(255)];
    // position(0,0);

    emitter = new PlayerNode(random(windowWidth-20), random(windowHeight-20), random(100)+10, nodeColour);
}

function draw() {
    emitter.show();
}
class PlayerNode {
    constructor(x, y, radius, colour) {
        // x and y is position
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.colour = colour;
    }

    show() {
        // construct the circle
        stroke(20);
        strokeWeight(2);
        circle(this.x, this.y, this.radius);
        fill(this.colour);
    }

    hide() {
        stroke(0);
        fill(0);
    }

    newLocation() {

    }
}

function scoreLayoutSetup() {
    let mainCanvas = createCanvas(windowWidth-20, windowHeight-20);
    mainCanvas.position(0,0);
    background(200);

    // Construct title
    textFont("Times New Roman");
    textStyle(ITALIC);
    textSize(45);
    textAlign(CENTER);
    text("working title", windowWidth/2, 35);

    // construct year
    textStyle(NORMAL);
    textSize(20);
    textAlign(CENTER);
    text("2024", windowWidth/2, 60);

    // construct composer
    textStyle(NORMAL);
    textSize(20);
    textAlign(RIGHT);
    text("vincent giles", windowWidth-20, 45);


    // construct score labels

    textFont("Verdana");
    textSize(12);
    textStyle(ITALIC);
    textAlign(LEFT);
    text("extended register ⬆️", 20, 190);
    text("high register ⬆️", 20, 390);
    text("mid register ⬆️", 20, 590);
    text("low register ⬆️", 20, 790);
    text("subtones ⬇️", 20, 820);
    textAlign(CENTER);
    text("⬅️ roll/bow pos/equiv ➡️", windowWidth/2, 190);

    // construct score grid lines noting that the size of the 'screen' should be at least 1040 pixels high and 820 wide. Standard laptop screen.

    stroke(150);
    line(windowWidth-windowWidth, 100, windowWidth-20, 100);
    stroke(80);
    strokeWeight(3);
    line(20, 200, windowWidth-40, 200);
    line(20, 800, windowWidth-40, 800);
    stroke(180);
    setLineDash([5, 5]);
    line(windowWidth/2, 200, windowWidth/2, 800);
    line(20, 400, windowWidth-40, 400);
    line(20, 600, windowWidth-40, 600);
    setLineDash([]);
}

function setLineDash(list) {
    drawingContext.setLineDash(list);
  }

function swSketch(p) {
    let sw = new StopWatch(3); 

    p.setup = function () {
        let secondCanvas = p.createCanvas(250, 100);
        secondCanvas.position(0,0);
        // p.position(0, 0);
        p.background(150);
        // p.position(20,20);
        sw.start();
    };

    p.draw = function () {
        p.stopWatch();
        // p.background(150);
    };

    p.stopWatch = function () {
        // mainCanvas.clear();
        textAlign(LEFT);
        textSize(24);
        fill(255, 0, 100);
        var s = "";
        if (sw.countdownFinished()) {
            stroke(0, 127, 200);
            s = "FINISHED.";
        } else {
            stroke(255);
            s = sw.minute() + " : " + sw.second(); 
            // stroke(0);   
        }
        // noFill();
        // ellipse(80, 40, 120, 80);
        fill(255);
        text(s, 40, 40 + (fontSize/3));
        // p.background(200);
        // p.background(150);
        p.clear();
        // mainCanvas.background(150);
    };
}

new p5(swSketch);