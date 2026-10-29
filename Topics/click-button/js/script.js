/**
 * Click the button
 * Alissa Horqque
 * 
 * Clicking the button, the button increases until it explodes.
 */

"use strict";

// Creating the button, and video variable.

const button = {

    x: 200,
    y: 200,
    size: 100,
    fill: "#9b803f",

}

let video;
let videoStarted = false;

/**
 * Setting up the video URL, creating canvas, and hiding video 
*/

function setup() {
    createCanvas(400,400)
    video = createVideo(['assets/explosion.mov']);

    video.hide();
}

// Drawing the background, button, and importing video.
function draw() {
    background(71,54,52);

    push();
    noStroke();
    fill(button.fill);
    ellipse(button.x,button.y,button.size);
    pop();
    if (videoStarted){
        image(video,0,0,400,400);

    }

    drawText();

}

function drawText() {
    push();
    fill("#ffffff");
    textSize(30);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("click!", 195 ,30);
    pop();
}

// Function mouse pressing, when reaches a certain size it explodes.
function mousePressed(){
    const d = dist(mouseX, mouseY, button.x, button.y);
    const overlap = (d < button.size / 2);
    if (overlap) {
        button.size += 20;

        if (button.size >= 400){
            videoStarted = true;
            video.time(0);
            video.play();
        }
    }

}