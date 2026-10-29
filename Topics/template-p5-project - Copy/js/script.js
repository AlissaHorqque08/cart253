/**
 * Title of Project
 * Author Name
 * 
 * Using the template named "Geometries" revised by Caleb Foss, and edited by p5.js Contributors.
 */

"use strict";

let torus1;


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
createCanvas(500,500, WEBGL);


angleMode(DEGREES);

normalMaterial();

torus1 = createTorus(250,250,50);

}


function createTorus(x,y,size){
    const torus = {
    x: x,
    y: y,
    size: size,
    velocity: {
        x: 0,
        y: 0
    },
    };
    return torus;
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255,255,255);

    updateTorus(torus1);
    drawTorus(torus1);
}

function updateTorus(torus){
    applyForces(torus);
    moveTorus(torus);
}

function applyForces(torus){
    torus.velocity.x *= 0.95;
    torus.velocity.y *= 0.95;   
    if (abs(torus.velocity.x)<0.1){
        torus.velocity.x = 0;
    }
    if (abs(torus.velocity.y)<0.1){
        torus.velocity.y = 0;
    }

    const d = dist(mouseX, mouseY, torus.x, torus.y);
    if (d<torus.size){
        torus.velocity.x += (torus.x - mouseX) * 0.005;
        torus.velocity.y += (torus.y - mouseY) * 0.005;

    }
}

function moveTorus(torus){
    torus.x += torus.velocity.x;
    torus.y += torus.velocity.y;
}

function drawTorus(torusObject){
    push();
    translate(
        torusObject.x - width/2,
        torusObject.y - height/2
    );
    rotateWithFrameCount();
    
    torus(torusObject.size,30);

    pop();
}

function rotateWithFrameCount(){
    rotateZ(frameCount);
    rotateX(frameCount);
    rotateY(frameCount);
}