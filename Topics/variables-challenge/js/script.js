/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";


// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }

};

let sky = {
    r: 204, 
    g: 255, 
    b: 255
};

let bird = {
   x:50,
   y:50,
   width:50,
   height:50,
   speed: 1,


    
};


/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}


/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(sky.r, sky.g, sky.b);
    sky.g -= 1;
    sky.b -= 1;
    sky.r -= 1;

    bird.x += bird.speed;

  
//   mrFurious.fill.r = lerp(mrFurious.fill.r, 255,0.1);
  mrFurious.fill.g -= 1
  mrFurious.fill.b -= 1
  
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  //mrFurious.fill.r += mrFurious.fill.r.speed();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);

    mrFurious.y += random(-1,1);
    mrFurious.x += random(-1,1);

  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();

//   push();
//   ellipse(CENTER);
//   noStroke();
//   ellipse(mrFurious.x, mrFurious.y + mrFurious.width *  mrFurious.height * 1.0)


  push();
  rectMode(CENTER);
  noStroke();
  fill("white");
  circle(bird.x, bird.y + bird.width * 0.5, bird.height);
  pop();

  push();

  mrFurious.size += 0.1;
}




