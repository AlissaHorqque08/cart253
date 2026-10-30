/**
 * Title of Project
 * Author Name
 * 
 * once img is imported then the image moves around the canvas
 */

"use strict";

let imgPositionX = 200;
let imgPositionY = 200;

let imgSpeedX = 2;
let imgSpeedY = 3;

let imgHue = 0;

let canvasText = 'Drag an image file onto the canvas.';

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400,400);
    background(255);

    dropArea.drop(gotFile);

    colorMode(HSB);

    strokeWeight(4);
    noLoop();


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    stroke(imgHue, 80, 90);

    if (imgPositionY >= 400 && imgPositionX <= 400);


}

function gotFile(file){
    if (file.type === 'image'){
        let img = createImg(file.data, ''). hide();
        image(img, 0, 0, width, height);
    } else {
        canvasText = 'Not an image file!';
        redraw();
    }

    }
