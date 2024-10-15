function setup() {
    createCanvas(windowWidth-20, windowHeight-20);

    background(220);

    describe('A canvas');
}

function drawEmitterCircle() {

}

class PlayerNode {
    constructor(x, y, r, s, o, b) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.f = random(255);
        this.s = s;
        this.o = o;
        this.history = [];
        this.notehistory = [b];
        this.b = b;
    }
}