/**
 * Battle Cats
 * Alissa Horqque
 *
 * For my simple drawing, I decided to draw a cat from my favourite game 
 *
 */

"use strict";

function setup() {
    createCanvas(400,400)

}


/**
 * My draw is going to add a stroke weight to the drawing and the general cat drawing
*/
function draw() {
    background(181,253,255)

    strokeWeight(3);

    drawCatDrawing();
}

/**
 * This includes the body, background, etc.
 */
function drawCatDrawing(){
    drawGrass();
    drawCatEars();
    drawLegs();
    drawBody();
    drawEyes();
    drawMouth();
    drawNose();
}

function drawGrass(){
  push();
  noStroke();
  fill(78,230,109);
  rect(0,250,400,300);
  pop();

}


function drawCatEars(){
  push();
  fill()
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
    pop();
}