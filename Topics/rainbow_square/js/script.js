/**
 * Rainbow Square
 * Alissa Horqque
 * 
 * Being able to use the examples from the hitting-the-border project
 * The user must import the image and then click on the canvas to move it across the square
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
 * Allowing the imported image to cover the canvas
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
 * The square for a border (To color change) 
 * Also when the mouse is pressed for the image to move around the canvas.
*/
function draw() {
    background(255);

    stroke(squareHue, 80,90)


    drawSquare();

    if (img !== undefined){


// this is how the images moves around the screen
    if (mouseIsPressed === true){

    squarePositionX = squarePositionX + squareSpeedX;
    squarePositionY = squarePositionY + squareSpeedY;

    squareHue = squareHue + 1;
    }
// this is how it changes colors
    if (squareHue >= 360){
        squareHue = 0;
    }
    
// If it hits the top and bottom border
    
if (squarePositionY + 40 >= squareY + squareSize ||
    squarePositionY - 40 <= squareY) {

    squareSpeedY = squareSpeedY * -1;
}

// If it hits the left and right border

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

// how the image gets imported.
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
