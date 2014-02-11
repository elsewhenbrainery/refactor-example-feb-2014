var sketchProc = function(processing) {

    // define screen data
    var screenSize = [ 800, 600 ];

    // define object data
    var objects = [
            {
                x: 10,
                y: 30,
                size: 60,
                xVelocity: 10,
                yVelocity: 5
            },
            {
                x: 10,
                y: 10,
                size: 30,
                xVelocity: 5,
                yVelocity: 2
            },
            {
                x: 50,
                y: 20,
                size: 50,
                xVelocity: 2,
                yVelocity: 5
            },
            {
                x: 100,
                y: 70,
                size: 40,
                xVelocity: 10,
                yVelocity: 7
            },
            {
                x: 89,
                y: 30,
                size: 52,
                xVelocity: 8,
                yVelocity: 15
            }
        ];

    var x = 10,
        y = 10;

    // put functions here, just like kahn academy
    var exampleFunction = function() {
        processing.rect(30, 20, 55, 55);
    };

    // this code is executed once when the program is started
    processing.setup = function() {

        // set up the size of the canvas (you probably don't want to change this!)
        processing.size(screenSize[0], screenSize[1]);

        //processing.frameRate(20);

    };

    // override draw function, by default it will be called 60 times per second
    processing.draw = function() {

        // draw some text
        //processing.image(img, 200, 30, 100, 100);
        processing.background(220);

        // check objects for collision with right-hand wall
        for (var i = 0; i < objects.length; i++) {

            // get a shorter reference to the current object
            var o = objects[i];

            // does object collide with right side of screen?
            if (o.x > screenSize[0] - o.size) {
                console.log("object " + i + " collided with right-hand wall");
                o.xVelocity = -o.xVelocity;
            }
        }

        // check objects for collision with left-hand wall
        for (var i = 0; i < objects.length; i++) {

            // get a shorter reference to the current object
            var o = objects[i];

            // does object collide with left side of screen?
            if (o.x < 0) {
                console.log("object " + i + " collided with left-hand wall");
                o.xVelocity = -o.xVelocity;
            }
        }

        // check objects for collision with top wall
        for (var i = 0; i < objects.length; i++) {

            // get a shorter reference to the current object
            var o = objects[i];

            // does object collide with top side of screen?
            if (o.y < 0) {
                console.log("object " + i + " collided with top wall");
                o.yVelocity = -o.yVelocity;
            }
        }

        // check objects for collision with bottom wall
        for (var i = 0; i < objects.length; i++) {

            // get a shorter reference to the current object
            var o = objects[i];

            // does object collide with bottom side of screen?
            if (o.y > screenSize[1] - o.size) {
                console.log("object " + i + " collided with bottom wall");
                o.yVelocity = -o.yVelocity;
            }
        }

        // move all objects
        for (var i = 0; i < objects.length; i++) {
            objects[i].x += objects[i].xVelocity;
            objects[i].y += objects[i].yVelocity;
        }

        // draw all objects
        for (var i = 0; i < objects.length; i++) {

            // get a convenient reference to the current object
            var currentObject = objects[i];

            processing.rect(
                currentObject.x,
                currentObject.y,
                currentObject.size,
                currentObject.size);
        }

    };
}

var canvas = document.getElementById("project-canvas");

// attaching the sketchProc function to the canvas
var p = new Processing(canvas, sketchProc);
