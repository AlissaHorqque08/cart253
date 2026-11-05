/**
 * Title of Project
 * Author Name
 * 
 *
 */

"use strict";

const follower = {
    diameter: 20,
    maxTrailLength: 100,
    trail: []
};

let balls = []
let ball = undefined;

function setup() {
    createCanvas(400,400);

    ball = createBall();
}


function createBall() {
    const newBall = {
    x: follower.x,
    y: follower.y,
    size: follower.diameter,
    // Colour
    fill: "rgb(251, 251, 250)",
    // Movement
    velocity: {
      x: random(-5, 5),
      y: random(-5, 5)
    }
    };
    return newBall;
}

function draw() {

    background(0);

    follower.x = mouseX;
    follower.y = mouseY;

    for (let i = 0; i < follower.trail.length; i++){
        let ball = follower.trail[i];

        let shade = map(i,0,follower.trail.length, 50, 255);
    }

    for (let ball of balls) {
    moveBall(ball);
    bounceBall(ball);
    drawBall(ball);
    }       
}
