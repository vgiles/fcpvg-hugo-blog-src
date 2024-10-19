"use strict";

// I think I need to remake this to have the canvases as separate layers

let emitter;
let nodeColour;
let fontLyric;
let fontScoreLabel;
let headerSize = 100;
let footerSize = 80;
let pieceDuration = 1;
const dynamicRange = Array(10).fill().map((element, index) => (index + 1) * 10);
let currentTime;
let eg;
let windowSizeW;
let windowSizeH;
// let firstLayer;
let compositionTitle = "making bread";
let composerName = "vincent giles";
let compYear = "2024";

function setup() {
    createCanvas(windowWidth-20, windowHeight-20);
    nodeColour = [random(255), random(255), random(255)];
    windowSizeW = windowWidth;
    windowSizeH = windowHeight;
}

function draw() {
    // apply graphics layers here
}

// stopwatch

function swSketch(p) {
    let sw = new StopWatch(pieceDuration); 

    p.setup = function () {
        let secondCanvas = p.createCanvas(180, 60);
        p.background(150);
        secondCanvas.position((windowSizeW/2)+200,20);
        sw.start();
    };

    p.draw = function () {
        p.background(150);
        p.stopWatch();
        currentTime = sw.second();
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
        p.text(s, p.width/2, p.height/2 + (fontSize*0.77));
        // p.background(200);
        // p.background(150);
        // p.clear();
        // mainCanvas.background(150);
    };
}

function randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

new p5(emitterLayer);
new p5(swSketch);
new p5(scoreLayer);



