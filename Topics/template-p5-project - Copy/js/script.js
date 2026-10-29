/**
 * Title of Project
 * Author Name
 * 
 * Using the template named "Geometries" revised by Caleb Foss, and edited by p5.js Contributors.
 */

"use strict";

let astronaut;


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
createCanvas(500,500, WEBGL);


angleMode(DEGREES);

normalMaterial();

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(255,255,255);

push();
translate(100,100,0);
rotateWithFrameCount();
torus(100,50);
pop();

}

function rotateWithFrameCount(){
    rotateZ(frameCount);
    rotateX(frameCount);
    rotateY(frameCount);
}