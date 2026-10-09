/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// sun height
let sunHeight = 400;

//color change
let redVal = 0;
let greenVal = 0;

//image
let hachiware = {
    image: undefined

}

async function preload(){
    hachiware.image = await loadImage("assets/images/hachiware.jpg");
}

async function setup() {

    createCanvas(400,400);

    await preload();
}

function drawMountains(){
    push();
    noStroke();
    fill(146,126,59);
    triangle(0,400,130,250,260,400);

    fill(208,181,95);
    triangle(160,400,280,250,400,400)
    pop();

}

function draw() {
    background(redVal,greenVal,0);
    //image -- sun

    hachiware.image.resize(100,100);
    image(hachiware.image, 150, sunHeight);


    if (mouseIsPressed === true){
        sunHeight -=2;
    } 

    if (mouseIsPressed === true) {
        redVal += 4;
        greenVal += 1;

    }

    drawMountains();



}