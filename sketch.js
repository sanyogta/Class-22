var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car=createSprite(200,200,40,40);
  car.shapeColor="red"
  car.velocityX=4;
  wall=createSprite(1000,200,20,100);
  wall.shapeColor="blue"
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

 if(isTouching(car,wall)){
 //car.shapeColor="yellow"
 //car.velocityX=0;
 text("car touched",200,200);
 } 

 BounceOff(car,wall)
  
  drawSprites();
}

