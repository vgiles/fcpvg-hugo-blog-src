// let emitter;
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

    animateCresc() {
        // construct the circle
        stroke(20);
        strokeWeight(2);
        fill(this.colour);
        circle(this.x, this.y, this.radius);
        while (this.radius <= dynamicRange[9]) {
            this.radius += millis() * 0.1;
        }
    }

    newPos(x, y, radius) {
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

