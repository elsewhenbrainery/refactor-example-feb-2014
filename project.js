var sketchProc = function(processing) {

    //var img = processing.loadImage("photo.jpg");

    var screenSize = [ 800, 600 ];

    var objects = [
            [
                10, // x
                30, // y
                60, // size
                10, // x speed
                5   // y speed
            ],
            [
                10, // x
                10, // y
                30, // size
                5,  // x speed
                2   // y speed
            ],
            [
                50, // x
                20, // y
                50, // size
                2,  // x speed
                5   // y speed
            ],
            [
                100, // x
                70,  // y
                40,  // size
                10,  // x speed
                7    // y speed
            ],
            [
                89,
                30,
                52,
                8,
                15
            ]
        ]

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
            if (o[0] > screenSize[0] - o[2]) {
                console.log("object " + i + " collided with right-hand wall");
                o[3] = -o[3];
            }
        }

        // check objects for collision with left-hand wall
        for (var i = 0; i < objects.length; i++) {

            // get a shorter reference to the current object
            var o = objects[i];

            // does object collide with left side of screen?
            if (o[0] < 0) {
                console.log("object " + i + " collided with left-hand wall");
                o[3] = -o[3];
            }
        }

        // check objects for collision with top wall
        for (var i = 0; i < objects.length; i++) {

            // get a shorter reference to the current object
            var o = objects[i];

            // does object collide with top side of screen?
            if (o[1] < 0) {
                console.log("object " + i + " collided with top wall");
                o[4] = -o[4];
            }
        }

        // check objects for collision with bottom wall
        for (var i = 0; i < objects.length; i++) {

            // get a shorter reference to the current object
            var o = objects[i];

            // does object collide with bottom side of screen?
            if (o[1] > screenSize[1] - o[2]) {
                console.log("object " + i + " collided with bottom wall");
                o[4] = -o[4];
            }
        }

        // move all objects
        for (var i = 0; i < objects.length; i++) {
            objects[i][0] += objects[i][3];
            objects[i][1] += objects[i][4];
        }

        // draw all objects
        for (var i = 0; i < objects.length; i++) {

            //console.log("drawing object " + i);
            //console.log("object array")

            //console.log(objects[i]);

            // get a convenient reference to the current object
            var currentObject = objects[i];

            processing.rect(
                currentObject[0],  // x
                currentObject[1],  // y
                currentObject[2],  // width
                currentObject[2]); // height (same b/c it is a square)
        }

    };
}

var canvas = document.getElementById("project-canvas");

// attaching the sketchProc function to the canvas
var p = new Processing(canvas, sketchProc);
