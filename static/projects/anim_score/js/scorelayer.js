// let firstLayer;

function scoreLayer(sl) {
    sl.setup = function () {
        let firstLayer = sl.createCanvas(windowSizeW-20, windowSizeH-20);
        // sl.createCanvas(windowWidth-20, windowHeight-20);
        firstLayer.position(0, 0);
    };
    sl.draw = function () {
        sl.fill(0);
        // Construct title
        sl.textFont("Times New Roman");
        sl.textStyle(ITALIC);
        sl.textSize(45);
        sl.textAlign(CENTER);
        sl.text(compositionTitle, windowWidth/2, 35);

        // construct year
        sl.textStyle(NORMAL);
        sl.textSize(20);
        sl.textAlign(CENTER);
        sl.text(compYear, windowWidth/2, 60);

        // construct composer
        sl.textStyle(NORMAL);
        sl.textSize(20);
        sl.textAlign(RIGHT);
        sl.text(composerName, windowWidth-40, 45);
    
        // construct score labels

        sl.textFont("Verdana");
        sl.textSize(12);
        sl.textStyle(ITALIC);
        sl.textAlign(LEFT);
        sl.text("extended register/overtones ⬆️", 20, (windowSizeH*0.231)-10);
        sl.text("high register ⬆️", 20, (windowSizeH*0.462)-10);
        sl.text("mid register ⬆️", 20, (windowSizeH*0.694)-10);
        sl.text("low register ⬆️", 20, (windowSizeH*0.925)-10);
        sl.text("subtones ⬇️", 20, (windowSizeH*0.925)+20);
        sl.textAlign(CENTER);
        sl.text("⬅️ roll/bow pos/equiv ➡️", windowWidth/2, (windowSizeH*0.231)-10);

        // construct score grid lines noting that the size of the 'screen' should be at least 1040 pixels high and 820 wide. Standard laptop screen.

        sl.stroke(150);
        sl.line(windowWidth-windowWidth+20, windowSizeH*0.115, windowWidth-20, windowSizeH*0.115);
        sl.stroke(80);
        sl.strokeWeight(2);
        sl.line(20, windowSizeH*0.231, windowWidth-40, windowSizeH*0.231);
        sl.line(20, windowSizeH*0.925, windowWidth-40, windowSizeH*0.925);
        sl.stroke(150);
        sl.setLineDash([5, 5]);
        sl.line(windowWidth/2, windowSizeH*0.231, windowWidth/2, windowSizeH*0.925);
        sl.line(20, windowSizeH*0.462, windowWidth-40, windowSizeH*0.462);
        sl.line(20, windowSizeH*0.694, windowWidth-40, windowSizeH*0.694);
        sl.setLineDash([]);
        sl.noStroke();
    };

    sl.setLineDash = function (list) {
        sl.drawingContext.setLineDash(list);
      }
}









