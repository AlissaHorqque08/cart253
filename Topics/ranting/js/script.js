/**
 * RANTINGG
 * Alissa Horqque
 * 
 * A ranting speech given by my MC gwen. Heavily inspired by "Friends, Romans, Countrymen" by Pippinsbarr
 */

"use strict";

// The speech gwen gives.
const speech = [
    "What the hell!?",
    "This entire situation is SO messed up.",
    "Im already so tired,",
    "Even if I did little to NO work so far!",
    "I'm going insane!!",
    "I wanna go home! I hate my life!",
    "Why did I think going outside was a good IDEA!?"
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

// Creating canvas and background image.
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

// The box created, and the text increases which changes the text with each mouse pressed.
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