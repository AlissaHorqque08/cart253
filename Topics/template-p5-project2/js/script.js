/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const button = {

    x: 200,
    y: 200,
    size: 100,
    fill: "#9b803f",

}

let video;
let videoStarted = false;
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400,400)
    video = createVideo(['assets/explosion.mov']);

    video.hide();
}


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