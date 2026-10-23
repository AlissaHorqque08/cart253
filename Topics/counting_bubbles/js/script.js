/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let bubble = undefined;
let bubble2 = undefined;
let bubble3 = undefined;
let bubble4 = undefined;

let score = 0;


function setup() {

    createCanvas(400,400);

    bubble = createBubble();

    bubble2 = createBubble();

    bubble3 = createBubble();

    bubble4 = createBubble();



}

function createBubble() {

    const bubble = {
        x: random(100, 300),
        y: -100,
        size: random(10, 100),
        fill: {
            r: random(255),
            g: random(255),
            b: random(255)
        },
        velocity: {
            x: 0,
            y: random(2, 10)
        }
    };
    return bubble;
}


function draw(){
    background(0);

    moveBubble(bubble);
    moveBubble(bubble2);
    moveBubble(bubble3);
    moveBubble(bubble4);

    drawElement(bubble);
    drawElement(bubble2);
    drawElement(bubble3);
    drawElement(bubble4);

    drawScore();

}

function drawScore() {
    push();
    fill("#ffffff");
    textSize(30);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(score, 195 ,30);
    pop();
}

function moveBubble(bubble) {
    bubble.x += bubble.velocity.x;
    bubble.y += bubble.velocity.y;

    if (bubble.y > height + bubble.size) {
        bubble.y = -bubble.size;
        bubble.x = random(100, 300);
    
        bubble.velocity.y = random(2, 10);
    
        changeColor(bubble);

}
}


function drawElement(element) {
    push();
    fill(element.fill.r, element.fill.g, element.fill.b);
    noStroke();
    ellipse(element.x, element.y, element.size);
    pop();
}

function changeColor(element) {
    element.fill.r = random(255);
    element.fill.g = random(255);
    element.fill.b = random(255);
}

function mousePressed() {
    checkBubble(bubble);
    checkBubble(bubble2);
    checkBubble(bubble3);
    checkBubble(bubble4);
}


function checkBubble(element) {
    const d = dist(mouseX, mouseY, element.x, element.y);

    if (d < element.size / 2) {
        score++;
    }
}