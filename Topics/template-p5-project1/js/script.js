/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const story = {
    currentScene: "discussion",
    index: 0,
    scenes: {
        dialog: [
            {
                type: "speech",
                name: "Gwen",
                speech: "Hey!"
            },
            {
                type: "speech",
                name: "Evan",
                speech: "Mind helping me out?"
            },
            {
                type: "choice",
                name: "Gwen",
                options: [
                    {
                    text: "Go die i HATE u",
                    toScene: "whyusomean",
                    keyCode: 65,
                    keyDisplay: "A"
                },
                {
                    text: "Like ok sighh",
                    toScene: "yayty",
                    keyCode: 66,
                    keyDisplay: "B"
                }
                ]
            }

        ]
    },

    whyusomean: {
        dialog: [
            {
                type: "speech",
                name: "Evan",
                speech: "Why you so mean?!"
            },
            {
                type: "speech",
                name: "Gwen",
                speech: "lock in bruv."
            }
        ]
    }
}



/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}