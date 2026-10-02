/**
 * Hitting the border
 * Alissa Horqque
 * 
 * With each hit of the border, the square changes colors
 * 
 */

"use strict";

let backgroundscreen = {
    x:200,
    y:200,
    size:400,

    fill: {
        r:219,
        g:219,
        b:219,
    }
};

let square = {
    x:120,
    y:270,
    size:100,
    velocity: {
        x:-2,
        y:-2,
    },

    fill:{
            r:193,
            g:255,
            b:248,
        }

};

//Setting up the canvas, and added the velocity for the square to hit the border frequently. 
// Including when the border hits the square, the square changes color.

function setup() {
    createCanvas(400,400);
}

function draw() {

    background(
        backgroundscreen.fill.r,
        backgroundscreen.fill.g,
        backgroundscreen.fill.b
    );

    square.x += square.velocity.x;
    square.y += square.velocity.y;

    if(square.x + square.size /2> backgroundscreen.x + backgroundscreen.size /2){
        square.velocity.x = -square.velocity.x
    }
    else if(square.x - square.size /2 <backgroundscreen.x - backgroundscreen.size /2){
        square.velocity.x = -square.velocity.x
    }
    if(square.y + square.size /2> backgroundscreen.y + backgroundscreen.size /2){
        square.velocity.y = -square.velocity.y
    }
    else if(square.y - square.size /2 <backgroundscreen.y - backgroundscreen.size /2){
        square.velocity.y = -square.velocity.y
    }

    if (square.x + square.size / 2 >= backgroundscreen.size) {
    square.velocity.x *= -1;
    changeColor();
    }

    if (square.x - square.size / 2 <= 0) {
    square.velocity.x *= -1;
    changeColor();
    }

    if (square.y + square.size / 2 >= backgroundscreen.size) {
    square.velocity.y *= -1;
    changeColor();
    }

    if (square.y - square.size / 2 <= 0) {
    square.velocity.y *= -1;
    changeColor();
    }

    // Draw the square
    push();
    rectMode(CENTER);
    noStroke();

    fill(
        square.fill.r,
        square.fill.g,
        square.fill.b
    );

    

    rect(square.x, square.y, square.size, square.size);
    pop();
}

function changeColor() {
    square.fill.r = random(255);
    square.fill.g = random(255);
    square.fill.b = random(255);
}