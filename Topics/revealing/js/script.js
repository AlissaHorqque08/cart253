/**
 * Revealing
 * Alissa Horqque
 * 
  * Which each click a part of the image is revealed by
  * Inspired by "Copy Image Data" by the p5.js contributors.
 */

"use strict";

let bottomImg, topImg;

// Creating canvas, loading images.
async function setup() {
    createCanvas(696,800);

    bottomImg = await loadImage("assets/images/beforebinary.png");
    topImg = await loadImage("assets/images/afterbinary.png");

    image(topImg, 0, 0);

}
// Each time the mouse is pressed, the picture is copied over, giving the simulation of revealing an image.
function mousePressed(){
  copy(bottomImg, mouseX, mouseY, 100, 100, mouseX, mouseY, 100, 100);
}