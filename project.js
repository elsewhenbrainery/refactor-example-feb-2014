var sketchProc = function(processing) {

    var img = processing.loadImage("photo.jpg");

    // put functions here, just like kahn academy
    var exampleFunction = function() {
        processing.rect(30, 20, 55, 55);
    };

    // this code is executed once when the program is started
    processing.setup = function() {

        // set up the size of the canvas (you probably don't want to change this!)
        processing.size(800, 600);

    };

    // override draw function, by default it will be called 60 times per second
    processing.draw = function() {

        // draw some text
        processing.image(img, 200, 30, 100, 100);

    };
}

var canvas = document.getElementById("project-canvas");

// attaching the sketchProc function to the canvas
var p = new Processing(canvas, sketchProc);
