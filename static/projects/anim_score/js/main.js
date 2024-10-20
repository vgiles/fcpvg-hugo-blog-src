"use strict";

// I think I need to remake this to have the canvases as separate layers
let secondLayer;
let emitter;
let nodeColour;
let fontLyric;
let fontScoreLabel;
let headerSize = 100;
let footerSize = 80;
let pieceDuration = 1;
const dynamicRange = Array(10).fill().map((element, index) => (index + 1) * 10);
let currentSecond;
let eg;
let windowSizeW;
let windowSizeH;
// let firstLayer;
let compositionTitle = "still life";
let composerName = "vincent giles";
let compYear = "2024";
let el;
let sl;
let sw;
let currentMinute;



function setup() {
    createCanvas(windowWidth-20, windowHeight-20);
    nodeColour = [random(255), random(255), random(255)];
    windowSizeW = windowWidth;
    windowSizeH = windowHeight;
}

function draw() {
    // apply graphics layers here
    // if (mouseIsPressed === true) {
    //     clear();
    //     el.emitter.newPos(random(windowWidth), random(windowHeight), randChoice(dynamicRange));
    //     el.emitter.show();
    //     el.emitter.checkEdges();
    // } else {
    //     clear();
    // }

    // if (sw.second <= 40 && sw.second >= 30) {
    //     clear();
    //     el.emitter.newPos(random(windowWidth), random(windowHeight), randChoice(dynamicRange));
    //     el.emitter.show();
    //     el.emitter.checkEdges();
    //     el.emitter.animateCresc();
    // } else {
    //     clear();
    // }
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
        currentSecond = sw.second();
        currentMinute = sw.minute();
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

function emitterLayer(el) {
    el.setup = function() {
        secondLayer = el.createCanvas(windowWidth-20, windowHeight-20);
        // print(windowWidth, windowHeight);
        el.emitter = new PlayerNode(windowWidth/2, windowHeight/2, randChoice(dynamicRange), nodeColour);
        secondLayer.position(0, 0);
        el.emitter.show();
        el.frameRate(60);

        // el.background(20);
        
    };
    el.draw = function() {
        // if (mouseIsPressed === true) {
        //     clear();
        //     el.emitter.newPos(random(-10, +10), random(-10, +10), randChoice(dynamicRange));
        //     el.emitter.show();
        //     el.emitter.checkEdges();
        // } else {
        //     clear();
        // }

        if (currentSecond <= 40 && currentSecond >= 30) {
            clear();
            el.emitter.newPos(random(-10, 10), random(-10, 10), randChoice(dynamicRange));
            el.emitter.show();
            el.emitter.checkEdges();
            el.emitter.animateCresc();
        } else {
            clear();
        }
        // el.emitter.clear();
        // el.background(255, 255, 255, 50);

        // el.clear();


        // el.clear();
        // el.emitter.show();
        // el.clear();
    };

    // function mouseClicked() {
    //     clear();
    //     el.emitter.newPos(random(windowWidth), random(windowHeight), randChoice(dynamicRange));
    //     el.emitter.show();
    //     el.emitter.checkEdges();
    // };
    // randChoice = function () {
    //     return arr[Math.floor(Math.random() * arr.length)];
    // };
}

// function setup() {
//     createCanvas(windowWidth-20, windowHeight-20);
//     windowSizeW = windowWidth;
//     windowSizeH = windowHeight;
//     scoreLayoutSetup();
//     describe('A canvas');
//     nodeColour = [random(255), random(255), random(255)];
//     eg = createGraphics(150,150);
//     eg.emitter = new PlayerNode(150, 150, randChoice(dynamicRange), nodeColour);
//     eg.emitter.show();
//     // print(windowSizeH*0.231);
//     // position(0,0);
//     // print(dynamicRange);
// }


new p5(emitterLayer);
new p5(swSketch);
new p5(scoreLayer);



