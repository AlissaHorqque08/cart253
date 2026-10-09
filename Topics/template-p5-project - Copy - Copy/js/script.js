/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let bryan = undefined

let pointilism;


async function setup() {
    bryan = await loadImage("assets/images/bryan.jpg");

    createCanvas(400,400);

    imageMode(CENTER);
    bryan.resize(240,240);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255);

    image(bryan, 200,200);
}

function paintBryan(){
    let sourceX = random(0, bryan.width);
    let sourceY = random(0, bryan.height);
    let c = bryan.get(sourceX, sourceY);


}