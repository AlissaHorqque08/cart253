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
  drawBase();
  //drawNormal_expression();
  //drawShocked_expression();
  drawMew_expression();

  // Draw a black bezier curve.
  

}

function drawBase() {

  stroke(255,74,214);
  strokeWeight(5);
  bezier(45, 10, 5, 30, -20, 145, 45, 200);
  bezier(260, 10, 300, 30, 320, 145, 260, 200);

}

function mousePressed(){
    changeExpression();
}

function changeExpression(){
    change++;
    changeStage();
}

function drawShocked_expression(){
    //eyes
    stroke(255,74,214);
    strokeWeight(5);
    circle(70,70,35);
    circle(230,70,35);

    //blush
    line(250,102,200,102)
    line(250,115,200,115)
    line(100,102,50,102)
    line(100,115,50,115)

    rect(115,120,70,100)

}
/**
function changeStage(){
    if (change >=6){
        stage = 2;
    } else if (change>=3){
        stage = 1;
    }else {
        stage = 0;
    }
}

function drawNormal_expression(){
stroke(255,74,214);
strokeWeight(5);
//eyes
line(50,60,100,80)
line(250,60,200,80)
line(50,90,100,80)
line(250,90,200,80)
//blush
line(250,102,200,102)
line(250,115,200,115)

line(100,102,50,102)
line(100,115,50,115)
//smile
bezier(120,103,114,135,175,135,170,103)
  //bezier(x1, y1, x2, y2, x3, y3, x4, y4)

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
