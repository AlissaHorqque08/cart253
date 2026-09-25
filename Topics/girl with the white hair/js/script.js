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
function setup() {
    createCanvas(400,400);
    noStroke();
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255,38,38);

    drawGirl();
}

function drawGirl(){

    drawBackhair();
    drawBody();
    drawHair();
}


function drawBackhair(){
    push();
    fill(255,255,255);
    quad(320,150, 230, 150, 120, 320, 240, 320);
    quad(120,320, 240, 320, 320, 400, 0, 400)

}
function drawBody(){
    push();
    fill(38,255,212);  

    //head
    circle(280,115,150);
    triangle(204, 130, 290,190, 235,190)

    //neck
    quad(270,235,  270,165,  320,165,  320,235)
    quad(270,225, 320,205, 325,260, 245,260)

    //body
    quad(325,260,245,260, 235,300, 325,300)
    quad(235,300,325,300, 325,400, 235,400)

    //arm
    circle(320,250,60)
    quad(325,250, 350,250, 350,400, 325, 400)

    pop();
}

function drawHair(){

    push();
    fill(255,255,255);
    //bangs
    triangle(240,160,280,90, 240,80)
    triangle(280,90, 280,230, 320,90)
    triangle(240,80, 210,70, 180,210)

    quad(320,100,325,300, 325,400, 235,400);

    quad(280,20, 310,190, 380, 130, 340, 50);
    
    quad(280,20, 210, 40, 200, 90, 300, 120);

    pop();
}