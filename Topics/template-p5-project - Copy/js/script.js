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

    velocity: {
        x:2,
        y:1
    },

    image: undefined

}

async function preload(){
    hachiware.image = await loadImage("/assets/images/hachiware.jpg");
}

async function setup() {

    createCanvas(400,400);

    await preload();
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


}
