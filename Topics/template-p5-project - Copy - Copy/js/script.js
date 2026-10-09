/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let bryanImage = undefined

let pointilism;


async function setup() {
    bryanImage = await loadImage("assets/images/bryan.jpg");

    
    createCanvas(400,400);

    pointilism = createGraphics(400,400);

    imageMode(CENTER);
    bryanImage.resize(240,240);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
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