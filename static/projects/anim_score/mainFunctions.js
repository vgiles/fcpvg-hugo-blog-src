"use strict";

// const { log } = require("console");

let emitter;
let nodeColour;
let fontLyric;
let fontScoreLabel;
let headerSize = 100;
let footerSize = 80;
let pieceDuration = 1;
const dynamicRange = Array(10).fill().map((element, index) => (index + 1) * 10);




//NB Top 70 pixels are HEADER

// Some ideas:
// Restrain appearing objects
// Animate appearing objects
//  - Vibrating = tremolo/flutter/growl
//  - Size (set a list of sizes to choose from)
//  - Create a 'start timer' button as the best approximation of sync
//  - Text overlay = sing the indicated text
//  - Markov chance of stacked sound
//  - Markov chance of image = quote snippets of memorised tunes of any style
//  - Repeating sequences (show(), hide(), duration)
//  - ppppp = quietest = as if whispering only to yourself (instrument/voice) (v. introspective)
//  - pppp = as if softly talking to yourself (introspective)
//  - ppp = standard very soft
//  - pp = standard interpretation
//  - ff = standard interpretation
//  - fff = standard very loud
//  - ffff = as if yelling into the void
//  - fffff = so loud that the the sound should distort/clip/break/be uncontrollable


function setup() {
    scoreLayoutSetup();
    describe('A canvas');
    nodeColour = [random(255), random(255), random(255)];
    // position(0,0);

    emitter = new PlayerNode(random(windowWidth-20), random(windowHeight-20), randChoice(dynamicRange), nodeColour);
    print(dynamicRange);
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
    // mainCanvas.position(5,5);
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
    text("extended register/overtones ⬆️", 20, 190);
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


function randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}







function swSketch(p) {
    let sw = new StopWatch(pieceDuration); 

    p.setup = function () {
        let secondCanvas = p.createCanvas(180, 80);
        p.background(150);
        secondCanvas.position(20,20);
        // p.position(0, 0);

        // p.position(20,20);
        sw.start();
    };

    p.draw = function () {
        p.background(150);
        p.stopWatch();
        // p.background(150);
    };

    p.stopWatch = function () {
        // mainCanvas.clear();
        p.textAlign(CENTER);
        p.textSize(40);
        p.fill(255, 0, 100);
        var s = "";
        if (sw.countdownFinished()) {
            p.stroke(0, 127, 200);
            s = "FINISHED.";
        } else {
            p.stroke(255);
            s = sw.minute() + " : " + sw.second(); 
            p.background(150);
            p.stroke(0);
        }
        // noFill();
        // ellipse(80, 40, 120, 80);
        p.fill(255);
        p.text(s, 90, 45 + (fontSize/3));
        // p.background(200);
        // p.background(150);
        // p.clear();
        // mainCanvas.background(150);
    };
}

new p5(swSketch);