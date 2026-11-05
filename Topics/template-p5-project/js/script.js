/**
 * Title of Project
 * Author Name
 * 
 * change of plans: which each key pressed depending on which number, summon a ball with a randomized number and make it bounce around
 * 
 *
 */

"use strict";

let balls = [];
let currentBallNumber;

function setup() {
    createCanvas(400, 400);
}

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

function draw() {
    background(0);

    for (let ball of balls) {
        moveBall(ball);
        bounceBall(ball);
        drawBall(ball);
    }
}

function moveBall(ball) {
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;
}

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