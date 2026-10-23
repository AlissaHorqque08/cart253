/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let words = ['Candy', 'Painted', 'Nails', 'On', 'The', 'Outside', 'Budgeting', 'The', 'Way', 'That', 'I', 'Spend', 'Time', 'Never', 'Seen', 'This', 'Shade', 'On', 'My', 'Insides', 'Any', 'Other', 'Way,', 'What', 'Are', 'Friends', 'Like?']

let newWord = [];

let hue;

let position;


function setup() {

    textFont('Bebas Neue')

    createCanvas(500,400);

    textAlign(CENTER);
    colorMode(HSB);

    hue = random(180,360);
    

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(191,0,89);

    for (let word of newWord){

        word.hue = (word.hue + 0.5) % 360;

        fill(word.hue, 90, 100);
        textSize(word.size);

        text(word.text, word.x, word.y);

    }

}

function mousePressed(){

    let selectedWord = random(words);

    let appearWord = {
        text: selectedWord,
        x: mouseX,
        y: mouseY,
        size: random(15,50),
        hue: random(0,260)

    };

    newWord.push(appearWord);
}