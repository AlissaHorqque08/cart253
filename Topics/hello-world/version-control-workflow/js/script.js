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
    drawLegs();
    drawBody();
    //drawEyes();
    //drawMouth();
}

function drawCatEars(){
    push();

  triangle(120,30,120,130,200,130);

  triangle(280,30,200,130,280,130);

  pop();
}

function drawLegs(){
    push();
    
    triangle(120,300,150,310,120,350)

    triangle(240,300,280,300,280,350)

    triangle(145,300,180,310,165,350)

    triangle(220,300,255,310,240,350)

    pop();
}

function drawBody(){
    push();
    ellipse(200,200,300,250);
    pop();
}
