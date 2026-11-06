/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let bg = {
    image: undefined
}

function preload(){
    bg.image = loadImage(
        "assets/images/mainoffice.png",
        function(){
            console.log("Image loaded successfully!");
        },
        function(error){
            console.log("Image failed to load:", error);
        }
    );
}

const story = {
    currentScene: "discussion",
    index: 0,
    scenes: {
        discussion: {
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
    },

    yayty: {
        dialog: [
            {
                type: "speech",
                name: "Evan",
                speech: "Yay thank you my good friend gwen"
            },
            {
                type: "speech",
                name: "Gwen",
                speech: "yayyyyyyy."
            }
        ]
    }
}
};



function setup(){
    createCanvas(400,400);
}

function draw(){
    background(255,23,25);
    image(bg.image, 150, 20);
    
    displayDialog();
}


function displayDialog(){
    const currentScene = story.scenes[story.currentScene];

    const element = currentScene.dialog[story.index];

    let displayText="";
    if (element.type === "speech"){
        displayText = element.name + ":" +
        element.speech;
    }
    else if (element.type === "choice"){
        for(let option of element.options){
            displayText += option.keyDisplay +":"+ option.text + "\n";
        }
    }

    push();
    textAlign(CENTER, CENTER);
    textSize(32);
    text(displayText, width/2, height/2);
    pop();

}


function mousePressed(){
    const currentScene =
story.scenes[story.currentScene];

    const element =
currentScene.dialog[story.index];

    if (element.type === "choice"){
        return;
    }

    story.index += 1;
    if (story.index >=
        currentScene.dialog.length
    ){
        story.index = currentScene.dialog.length - 1;
    }

}

function keyPressed(event){
    const currentScene =
    story.scenes[story.currentScene];
    const element =
    currentScene.dialog[story.index];

    if (element.type !== "choice"){
        return;
    }

    for (let option of element.options){
        if (event.keyCode === option.keyCode){
            story.currentScene = option.toScene;
            story.index = 0;
        }
    }
}
