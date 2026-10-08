/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let drop = undefined;


// Images for randomizing
let gwenimage = undefined;
let rowdyimage = undefined;
let estherimage = undefined;
let integraimage = undefined;
let samimage = undefined;

async function preload() {
    gwenimage = await loadImage("assets/images/flip_phone_gwen");
}

async function preload() {
    rowdyimage = await loadImage("assets/images/tinfoil_hat_rowdy");
}

async function preload() {
    estherimage = await loadImage("assets/image/key_esther");
}

async function preload() {
    integraimage = await loadImage("assests/image/card_esther");
}

async function preload() {
    samimage = await loadImage("assests/image/evil_book_sam");
}


async function setup() {
    createCanvas(400,400);

    await preload();

    const p = random();

    if (p < 0.01) {
        drop = "A key from Esther!"
    }

    else if (p < 0.17){
        drop = "An evil book of plans from Sam!"
    }

    else if (p < 0.3){
        drop = "A credit card from Integra!"
    }

    else if (p < 0.52){
        drop = "A tinfoil hat from Rowdy!"
    }

    else {
        drop = "My flip phone!"
    }

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
 push();
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(18);
  text(drop, width/2, height/2);
}
