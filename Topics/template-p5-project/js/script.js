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
let ball = undefined;

function setup(){
    createCanvas(400,400);

    ball = createBall();
}

function createBall(){

      const newBall = {
    // Position and dimensions
    x: 200,
    y: 200,
    size: 20,
    // Colour
    fill: {
        r: random(255),
        g: random(255),
        b: random(255)
    },
    // Movement
    velocity: {
      x: random(-5, 5),
      y: random(-5, 5)
    }
  };
  return newBall;
}

function draw(){
    background(255);
    
  for (let ball of balls) {
  moveBall(ball);
  bounceBall(ball);
  drawBall(ball);
}
}

function moveBall(ball){
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;
}

function bounceBall(ball) {
  // Check if the ball has reached the left or right
  const bounceX = (ball.x > width || ball.x < 0);
  // Check if the ball has reached the top or bottom
  const bounceY = (ball.y > height || ball.y < 0);
  
  // Handle bouncing horizontally
  if (bounceX) {
    ball.velocity.x *= -1;
  }
  // Handle bouncing vertically
  if (bounceY) {
    ball.velocity.y *= -1;
  }
}

/**
 * Draw the ball on the canvas
 */
function drawBall(ball) {
  push();
  noStroke();
  fill(ball.fill);
  ellipse(ball.x, ball.y, ball.size);
  pop();
}