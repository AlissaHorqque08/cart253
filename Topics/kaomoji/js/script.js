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

let expression = 0;


function setup() {
  createCanvas(300, 300);

}

function draw(){
  background(255);

  drawBase();
  drawExpressions(); 
  drawText();

}

function drawBase() {

  stroke(255,74,214);
  strokeWeight(5);
  bezier(45, 10, 5, 30, -20, 145, 45, 200);
  bezier(260, 10, 300, 30, 320, 145, 260, 200);

}


function drawExpressions(){

    if (expression === 2) {
        //eyes
    stroke(255,74,214);
    strokeWeight(5);
    circle(70,85,25);
    circle(230,85,25);

    //eyebrows
    line(260,70,235,50);
    line(40,70,70,50);

    //mouth
    bezier(100,103,80,115,125,135,150,109);
    bezier(200,103,210,115,185,135,150,109);
    }

    if (expression === 1) {
    //eyes
    stroke(255,74,214);
    strokeWeight(5);
    circle(70,70,35);
    circle(230,70,35);

    //blush
    line(250,102,200,102);
    line(250,115,200,115);
    line(100,102,50,102);
    line(100,115,50,115);

    rect(115,120,70,100);
    }


    if (expression === 0){
    stroke(255,74,214);
    strokeWeight(5);
    //eyes
    line(50,60,100,80);
    line(250,60,200,80);
    line(50,90,100,80);
    line(250,90,200,80);
    //blush
    line(250,102,200,102);
    line(250,115,200,115);

    line(100,102,50,102);
    line(100,115,50,115);
    //smile
    bezier(120,103,114,135,175,135,170,103);
    //bezier(x1, y1, x2, y2, x3, y3, x4, y4)
    }
}

function mousePressed(){
    expression++;

    if (expression > 2) {
        expression = 0;
    }
}

function drawText(){
    push();
    fill(255,74,214)
    textSize(30)
    strokeWeight(2)
    textAlign(CENTER,CENTER);
    text('Click me!', 150,30)
    pop();

}
