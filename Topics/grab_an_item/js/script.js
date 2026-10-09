/**
 * Grab an item.
 * Alissa Horqque
 * 
 * Dropping a loot every click of a buttom.
 */

"use strict";

let drop = "Click to get a drop!";
let dropImage = undefined;


// Images
let gwenimage = undefined;
let rowdyimage = undefined;
let estherimage = undefined;
let integraimage = undefined;
let samimage = undefined;

async function preload() {
    gwenimage = await loadImage("assets/images/flip_phone_gwen.png");

    rowdyimage = await loadImage("assets/images/tinfoil_hat_rowdy.png");

    estherimage = await loadImage("assets/images/key_esther.png");
    
    integraimage = await loadImage("assets/images/card_integra.png");
    
    samimage = await loadImage("assets/images/evil_book_sam.png");
}

// Creating canvas, loading images, and adding the function to randomizing every time the mouse is pressed.
async function setup() {
    createCanvas(400,400);

    await preload();
}
function mousePressed(){

    const p = random();

    if (p < 0.01) {
        drop = "A key from Esther!";
        dropImage = estherimage;
    }

    else if (p < 0.17){
        drop = "An evil book of plans from Sam!";
        dropImage = samimage;
    }

    else if (p < 0.3){
        drop = "A credit card from Integra!";
        dropImage = integraimage;
    }

    else if (p < 0.52){
        drop = "A tinfoil hat from Rowdy!";
        dropImage = rowdyimage;
    }

    else {
        drop = "My flip phone!";
        dropImage = gwenimage;
    }

}

/**
 * Creating the canvas, text, and positioning the images.
*/
function draw() {

    background(246,246,241);

    push();
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(18);
    
    if (dropImage !== undefined){
    imageMode(CENTER);
    image(dropImage, width / 2,150,150,150);

  }

  text(drop, width/2, 300);
  pop();
}
