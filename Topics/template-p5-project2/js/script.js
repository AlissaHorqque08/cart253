/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let bottomImg, topImg;

async function setup() {
    createCanvas(696,800);

    bottomImg = await loadImage("assets/images/beforebinary.png");
    topImg = await loadImage("assets/images/afterbinary.png");

    image(topImg, 0, 0);

}

function mousePressed(){
  copy(bottomImg, mouseX, mouseY, 20, 20, mouseX, mouseY, 20, 20);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}