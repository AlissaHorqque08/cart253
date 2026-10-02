/**
 * Looking at you
 * Alissa Horqque
 * 
 * The pupils are looking straight at the cursor, 
 * constrained by x,y commands to not leave the white eyes border
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400,400);
    noStroke();

}

function draw(){
    background(176,176,176)

    drawEyes();
    drawPupil();
}

function drawEyes(){
    push();
    fill(255,255,255);
    ellipse(100,180,120,230);
    ellipse(300,180,120,230);
    pop();
}

function drawPupil() {

    push();
    let pupilX1 = constrain(mouseX, 70,130);
    let pupilY1 = constrain(mouseY, 125, 235);
    let pupilX2 = constrain(mouseX, 270, 330);
    let pupilY2 = constrain(mouseY, 125, 235);

    fill(0,0,0);
    ellipse(pupilX1,pupilY1, 60,60);
    ellipse(pupilX2, pupilY2, 60,60);
    pop();
}