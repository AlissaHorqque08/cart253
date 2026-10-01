/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

let change = 0;
let stage = 0;
let Normal_expression;
let Shocked_expression;
let Mew_expression;


function setup() {
  createCanvas(300, 300);


  background(255);
  drawNormal_expression();
  drawShocked_expression();
  drawMew_expression();

  // Draw a black bezier curve.
  noFill();
  stroke(255,74,214);
  strokeWeight(5);
  bezier(45, 10, 5, 30, -20, 145, 45, 200);
  bezier(260, 10, 300, 30, 320, 145, 260, 200);

  //bezier(x1, y1, x2, y2, x3, y3, x4, y4)

}

function mousePressed(){


}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/

/**
function drawFace() {
    noFill()
    stroke(255,24,202);
    strokeWeight(5);
    bezier(85, 20, 10, 10, 90, 90, 15, 80);

}
*/
