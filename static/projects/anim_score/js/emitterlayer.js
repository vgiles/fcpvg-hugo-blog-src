// let emitter;
let secondLayer;

function emitterLayer(el) {
    el.setup = function() {
        secondLayer = el.createCanvas(windowWidth-20, windowHeight-20);
        // print(windowWidth, windowHeight);
        el.emitter = new PlayerNode(windowWidth/2, windowHeight/2, randChoice(dynamicRange), nodeColour);
        secondLayer.position(0, 0);
        el.emitter.show();
        el.frameRate(15);

        // el.background(20);
        
    };
    el.draw = function() {
        if (mouseIsPressed === true) {
            clear();
            el.emitter.hop(random(windowWidth), random(windowHeight), randChoice(dynamicRange));
            el.emitter.show();
            el.emitter.checkEdges();
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
        fill(this.colour);
        circle(this.x, this.y, this.radius);
    }

    hop(x, y, radius) {
        // clear();
        // el.clear();
        this.radius = radius;
        this.x += x;
        this.y += y;
    }

    checkEdges() {
        if (this.x > windowWidth) {
            this.x = this.x - windowWidth;
        } else if (this.x < 0) {
            this.x = windowWidth - this.x;
        }
    
        if (this.y > windowHeight) {
            this.y = this.y - windowHeight;
        } else if (this.y < 0) {
            this.y = windowHeight - this.y;
        }
    }
    // clean() {
    //     clear();
    // }
}

// }
// // does this need to be in a new graphics thing? -- yes, use graphics buffer.
// function spawnEmitter(xPos, yPos, dynamic) {
//     image(eg, xPos, yPos);

//     // emitter = new PlayerNode(xPos, yPos, dynamic, nodeColour);
// }

// function despawnEmitter() { // this will be hide the graphics buffer
//     // eg.clear();
//     eg.remove();
//     // eg = undefined;
// }


