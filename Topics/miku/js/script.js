/**
 * Abstract Miku
 * Alissa Horqque
 * 
 * A drawing of a famous character Hatsune miku with her pigtails being changed to exclamation points.
 */

"use strict";

/**
 * Setup will add no stroke and the canvas size
*/
function setup() {
    createCanvas(400,400)
    noStroke();
}



/**
 * The function will draw the background & my character
*/
function draw() {
    background(88,93,94)

    drawMiku();
}

function drawMiku(){

    drawHeadphones();
    drawHead();
    drawHair();
    drawPigtails();
    drawFace();
}

function drawHead(){

    push();

    fill(213,213,213);
    circle(200,170,140);
    quad(155,245,  135,195,  265,195,  248,245);
    quad(180,280, 155, 245, 248, 245, 225, 280);
    quad(225, 280, 180,280, 193,290, 213,290);

    pop();
}


function drawHair(){

    push();
    fill(97,191,187);

    //back hari 
    rect(160,95,80,80);

    //mid bang
    quad(225,160, 175,160, 182,234, 219,234);
    
    //side bangs
    quad(180,180, 151,255, 117,210, 145,134);
    quad(220,180, 252,255, 284,210, 255,134);
    
    //top head
    quad(200,95, 260,220, 290,180, 245,95);
    quad(200,95, 141,220, 110,180, 153,95);

    //bottom side bangs
    triangle(140,240,160,230,170,280);
    triangle(245,240 ,270,230, 235,280);
    pop();

}

function drawHeadphones(){
    push();

    fill(0,0,0);
    noStroke();

     quad(210,125, 145,180, 100,160, 130,100);
     quad(240,190, 240,110, 265,100, 300,160);


    stroke(253,53,207);
    strokeWeight(4);

    line(109,165,140,100);

    line(292,165,257,100);

    pop();
}

function drawPigtails(){
    push();
    fill(97,191,187);

    circle(60,75,75);
    circle(340,75,75);

    triangle(22,75, 98,75, 60,300);
    triangle(302,75, 378,75, 340, 300);
    
    circle(60,350,40);
    circle(340,350,40);

    pop();
}

function drawFace(){
    push();
    strokeWeight(3.2);
    stroke(0,0,0);

    line(158,225,184,225);
    line(220,225,245,225);

    

    fill(0,0,0);
    circle(230,229,8.5);
    circle(173,229,8.5);

    pop();
}