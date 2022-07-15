var Boy,BoyImage;
var road,roadImage;
var PLAY = 1;
var END = 0;
var gameState=PLAY;
var car,carImage;
var left,right,leftImage,RightImage;
var carGroup;

function preload(){
  BoyImage = loadImage("Boy.png");
  roadImage = loadImage("road.png");
  carImage = loadImage("car.png");
  leftImage = loadImage("left arrow.png");
  RightImage = loadImage("right arrow.jpg");
}



function setup(){
createCanvas(600,600);
  road = createSprite(300,300);
  road.addImage(roadImage);
  Boy = createSprite(300,500);
  Boy.addImage(BoyImage);
  left = createSprite(200,200);
  left.addImage(leftImage);
  right = createSprite(400,200);
  right.addImage(RightImage);
  Boy.scale = 0.3
  road.scale = 0.9
  right.scale = 0.4
  left.scale = 0.1
  road.velocityY = 3;
  carGroup = new Group();
}

function draw(){
background("black");
  
  if(gameState==PLAY){
  
  if (keyDown("left_arrow")){
    Boy.x = Boy.x -5;
  }
  if (keyDown("right_arrow")){
    Boy.x = Boy.x +5;
  }
  cars();
  if (road.y>600){
    road.y = 400;
  }
    if (mousePressedOver(right)) {
    ( Boy.x = Boy.x +5);
    }
    
    if (mousePressedOver(left)) {
    ( Boy.x = Boy.x -5);
    }
  if(carGroup.isTouching(Boy)||Boy.y>600){
    gameState = END;
  }
 
  drawSprites();
}
   if(gameState==END){
    background("red");
     textSize(40);
     fill("blue");
     stroke("Black");
     text("GAME OVER",200,200)
  }
  
}

function cars(){
  if (frameCount % 100 ==0 ){
    car = createSprite(Math.round(random(100,500)),-50)
    car.addImage(carImage);
    car.velocityY = 3;
    car.scale = 0.10
    car.lifetime = 250;
    car.depth = Boy.depth
    Boy.depth +=1 ;
    carGroup.add(car);
  }
}
