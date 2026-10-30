/**
 * Title of Project
 * Author Name
 * 
 * once img is imported then the image moves around the canvas
 */

"use strict";

let squarePositionX = 200;
let squarePositionY = 200;

let squareSpeedX = 2;
let squareSpeedY = 3;

let squareHue = 0;

let canvasText = 'Drag an image file onto the canvas.';

let squareX = 100;
let squareY = 100;
let squareSize = 200;

let dropArea;

let img = undefined;


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    let dropArea = createCanvas(400,400);
    background(255);
    
    
    dropArea.drop(gotFile);

    colorMode(HSB);

    strokeWeight(4);

    imageMode(CENTER);



}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255);

    stroke(squareHue, 80,90)


    drawSquare();

    if (img !== undefined){

    
    if (mouseIsPressed === true){

    squarePositionX = squarePositionX + squareSpeedX;
    squarePositionY = squarePositionY + squareSpeedY;

    squareHue = squareHue + 1;
    }

    if (squareHue >= 360){
        squareHue = 0;
    }
    

    
if (squarePositionY + 40 >= squareY + squareSize ||
    squarePositionY - 40 <= squareY) {

    squareSpeedY = squareSpeedY * -1;
}

if (squarePositionX + 40 >= squareX + squareSize ||
    squarePositionX - 40 <= squareX) {

    squareSpeedX = squareSpeedX * -1;
}

    push();
    image(img, squarePositionX, squarePositionY, 80,80);
    pop();

    } else {

        fill(0);
        noStroke();
        textAlign(CENTER, CENTER);
        text(canvasText, width/2, height/2);
    }
}

function drawSquare(){
    // creating square
    noFill();
    strokeWeight(2);
    rect(squareX, squareY, squareSize, squareSize);

}


function gotFile(file){
    if (file.type === 'image'){
        img = createImg(file.data, '');
        img.hide();

        squarePositionX = 200;
        squarePositionY = 200;
    
        loop();

    } else {
        canvasText = 'Not an image file!';
        redraw();
    }

    }
