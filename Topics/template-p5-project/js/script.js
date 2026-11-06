/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const speech = [
    "nelelrjerenre"
]

let speechIndex = 0;

let box = {
    x: 200,
    y: 750,
    width: 1800,
    height: 580,
    padding: 20,
    fontSize: 400 
};

let gwenImage = undefined;

async function setup(){
    createCanvas(1800,1002);

    gwenImage = await loadImage("assets/images/crying_bathroom.PNG");
}

function draw(){
    background(0);
    gwenImage.resize(1500,835);

    image(gwenImage, 250,129);
    showDialog();
}

function showDialog(){
    push();
    fill(0);
    stroke(255);
    strokeWeight(3);
    rect(box.x, box.y, box.width, box.height);
    pop();

    push();
    fill(255);
    textSize(40);
    text(speech[speechIndex], box.x + box.padding, box.y + box.padding, box.width - 2 * box.padding, box.height - 2 * box.padding);
    pop();
}

function mousePressed() {

  if (speechIndex < speech.length - 1) {

    speechIndex++;
}
}