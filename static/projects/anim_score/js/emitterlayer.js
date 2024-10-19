



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
        // this.radius = radius;
        // this.y = y;
        stroke(20);
        strokeWeight(2);
        circle(this.x, this.y, this.radius);
        fill(this.colour);
        // stroke(1);
    }

}
// does this need to be in a new graphics thing? -- yes, use graphics buffer.
function spawnEmitter(xPos, yPos, dynamic) {
    image(eg, xPos, yPos);

    // emitter = new PlayerNode(xPos, yPos, dynamic, nodeColour);
}

function despawnEmitter() { // this will be hide the graphics buffer
    // eg.clear();
    eg.remove();
    // eg = undefined;
}


