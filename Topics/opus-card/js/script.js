/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400,400)
    noStroke();
}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(88,93,94)

    drawMiku();
}

function drawMiku(){
    drawFace();
    drawHair();
}

function drawFace(){

    push();

    fill(213,213,213);
    circle(200,170,140);
    quad(155,245,  135,195,  265,195,  248,245);
    quad(180,280, 155, 245, 248, 245, 225, 280);
    quad(225, 280, 180,280, 193,290, 213,290)

    pop();
}

function drawHair(){

    push();
    fill(97,191,187)

    rect(160,95,80,80)

    //mid bang
    quad(225,160, 175,160, 182,234, 219,234);
    
    //side bangs
    quad(180,180, 151,255, 117,210, 145,134);
    quad(220,180, 252,255, 284,210, 255,134);
    
    //top head
    quad(200,95, 260,220, 290,180, 245,95);
    quad(200,95, 141,220, 110,180, 153,95);

    //bottom side bangs
    triangle(140,240,160,230,170,280);
    triangle(245,240 ,270,230, 235,280);
    pop();

}