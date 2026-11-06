/**
 * Number balls
 * Alissa H
 * 
 * Which each key pressed depending on which number, summon a ball with a randomized number and make it bounce around
 * 
 *
 */

"use strict";

// Creating balls, and the caption to show instructions.
let balls = [];
let currentBallNumber;
let caption = 'Point, and press any number between 1-5!'

// Created canvas
function setup() {
    createCanvas(400, 400);
    fill('white');
}

// Creating the ball
function createBall(x, y) {

    const newBall = {
        x: x,
        y: y,
        size: 20,

        fill: {
            r: random(255),
            g: random(255),
            b: random(255)
        },

        number: currentBallNumber,
        velocity: {
            x: random(-5, 5),
            y: random(-5, 5)
        }
    };

    return newBall;
}

// Background, caption, and the function for the balls
function draw() {
    background(0);

    text(caption, 150,50);

    for (let ball of balls) {
        moveBall(ball);
        bounceBall(ball);
        drawBall(ball);
    }
}

// How the ball moves around
function moveBall(ball) {
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;
}
// Constraining the ball inside the canvas
function bounceBall(ball) {

    if (ball.x > width - ball.size / 2 ||
        ball.x < ball.size / 2) {
        ball.velocity.x *= -1;
    }

    if (ball.y > height - ball.size / 2 ||
        ball.y < ball.size / 2) {
        ball.velocity.y *= -1;
    }
}

// Drawing ball, randomized colors, and the text numbers.
function drawBall(ball) {

    push();
    noStroke();
    fill(ball.fill.r, ball.fill.g, ball.fill.b);
    ellipse(ball.x, ball.y, ball.size);

    fill("white");
    textSize(12);
    textAlign(CENTER, CENTER);

    text(ball.number, ball.x, ball.y);

    pop();
}

// Each time a key is pressed then a different ball is spawned with that number.
function keyPressed() {

    if (key === '1') {
        currentBallNumber = 1;
        let newBall = createBall(mouseX, mouseY);
        balls.push(newBall);
    }

    if (key === '2') {
        currentBallNumber = 2;
        let newBall = createBall(mouseX, mouseY);
        balls.push(newBall);
    }

    if (key === '3') {
        currentBallNumber = 3;
        let newBall = createBall(mouseX, mouseY);
        balls.push(newBall);
    }

    if (key === '4') {
        currentBallNumber = 4;
        let newBall = createBall(mouseX, mouseY);
        balls.push(newBall);
    }

    if (key === '5') {
        currentBallNumber = 5;
        let newBall = createBall(mouseX, mouseY);
        balls.push(newBall);
    }
}