/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
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
    x:100,
    y:250,
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