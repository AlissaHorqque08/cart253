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

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(205,205,205)

    drawCat();
}


function drawCat(){
    drawCatEars();
    drawBody();
    //drawEyes();
    //drawLegs();
    //drawMouth();
}

function drawCatEars(){
    push();
    
  triangle(120,30,120,130,200,130);

  triangle(280,30,200,130,280,130);
}

function drawBody(){
    push();
    ellipse(200,200,300,250);
    pop();
}
