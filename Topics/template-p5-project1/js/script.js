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
            discussion: {
            dialog: [
                    {
                        type: "speech",
                        name: "Gwen",
                        speech: "Hey!",
                        image: "gwenNormal"
                    },
                    {
                        type: "speech",
                        name: "Evan",
                        speech: "Mind helping me out?",
                        image: "evanGenuine"
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
                    speech: "Why you so mean?!",
                    image: "evanSad"
                },
                {
                    type: "speech",
                    name: "Gwen",
                    speech: "lock in bruv.",
                    image: "gwenConfused"
                }
            ]
        },

        yayty: {
            dialog: [
                {
                    type: "speech",
                    name: "Evan",
                    speech: "Yay thank you my good friend gwen",
                    image: "evanImright"
                },
                {
                    type: "speech",
                    name: "Gwen",
                    speech: "yayyyyyyy.",
                    image: "gwenKao"
                }
            ]
        },
    },
    
        images: {
            gwenNormal: {
                path: "assets/images/GwenNormal.png",
                image: undefined
            },
            gwenConfused: {
                path: "assets/images/GwenConfuse.png",
                image: undefined
            },

            gwenKao: {
                path: "assets/images/GwenConfuse.png",
                image: undefined
            },

            evanGenuine: {
                path: "assets/images/evan gen.png",
                image: undefined
            },

            evanSad: {
                path: "assets/images/evan sad.png",
                image: undefined
            },

            evanImright: {
                path: "assets/images/evan imright.png",
                image: undefined
            }


        }
};

function preload(){
    story.images.gwenNormal.image = loadImage(story.images.gwenNormal.path);

}

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(255);
    
    displayDialog();
}


function displayDialog(){
    const currentScene = story.scenes[story.currentScene];

    const element = currentScene.dialog[story.index];


    let displayText="";
    if (element.type === "speech"){
        displayText = element.name + ":" +
        element.speech;

        const faceImage = story.images[element.image].image;

        image(faceImage,100,50,200,200)
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
