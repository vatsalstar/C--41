var boy,boyImg;
var ground,groundImg;

function preload(){
    boyImg = loadImage("sprites/boy.png");
    
}

function setup(){
    var canvas = createCanvas(800,700);
    boy = createSprite(70,580);
   
    
}

function draw(){
    boy.display();
    
}   

