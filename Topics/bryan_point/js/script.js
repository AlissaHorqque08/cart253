/**
 * Bryan, Point!
 * Alissa Horqque
 * 
 * Whenever pressing down the button, the more the drawing paints itself in pointilism.
 */

"use strict";
let bryanImage = undefined

let pointilism;

/**
 * Setting up the function to create canvas, loading the iamge, creating the graphics for pointilism and resizing the bryan image.
 */

async function setup() {
    bryanImage = await loadImage("assets/images/bryan.jpg");

    
    createCanvas(400,400);

    pointilism = createGraphics(400,400);

    imageMode(CENTER);
    bryanImage.resize(240,240);
}


/**
 * Drawing the background, the text, and creating the "if" statement so whenever the mouse is pressed, the computer paints Bryan.
*/
function draw() {
    background(255);

    strokeWeight(3)
    text("Hold me!", 150,300)
    if (mouseIsPressed){
    paintBryan();
    }

    image(pointilism, width/2, height/2)
}


function paintBryan(){
    let sourceX = random(0, bryanImage.width);
    let sourceY = random(0, bryanImage.height);
    let c = bryanImage.get(sourceX, sourceY);

    pointilism.stroke(c);
    pointilism.strokeWeight(random(5,10));
    pointilism.point(sourceX, sourceY);
}