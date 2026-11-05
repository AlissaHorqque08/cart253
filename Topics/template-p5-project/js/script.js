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

function setup() {
    createCanvas(400,400);


}


function draw() {

    background(0);

    follower.x = mouseX;
    follower.y = mouseY;

    for (let i = 0; i < follower.trail.length; i++){
        let element = follower.trail[i];

        let shade = map(i,0,follower.trail.length, 50, 255);
    }

}