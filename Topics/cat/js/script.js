/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

function setup() {
    createCanvas(400,400)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(205,205,205)

    strokeWeight(3);

    drawCat();
}


function drawCat(){
    drawCatEars();
    drawLegs();
    drawBody();
    drawEyes();
    drawMouth();
    drawNose();
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
  
}

function drawBody(){
    push();
    ellipse(200,200,300,250);
    pop();
}

function drawEyes(){
  push();

  strokeWeight(15);
  point(135, 135);

  point(233, 135);
}

function drawNose(){
  push();
  strokeWeight(3);
  spline(200, 145, 186, 160, 176, 160, 163, 145);
    pop();
}


function drawMouth(){
    push();
    strokeWeight(3);
    spline(160,176,176,210,190,210,205,176);
    spline(145,160,150,176,165,176,184,160);
    spline(180,160,195,176,212,176,220,160);
}