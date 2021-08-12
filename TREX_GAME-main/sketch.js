var player
var obstacle, fire, obstaclee
var ground, obstaclesGroup, obstaclesGroupp

function preload(){
playerI = loadImage("player.png");
dragonI = loadImage("dragon.png");
dragonnI = loadImage("dragonn.png");
fireI = loadImage("fire.png");
bigdragonI = loadImage("big dragon.png");
}

function setup() {
player = createSprite(50,180,20,50);
player.addImage("pl", playerI)
ground = createSprite(200, 400, 500, 30)
ceiling = createSprite(200, -20, 500, 30)
wall1 = createSprite(-20, 200, 30, 500)
wall2 = createSprite(420, 200, 30, 500)
platform1 = createSprite(300, 325, 75, 20)
platform2 = createSprite(100, 300, 75, 20)
platform3 = createSprite(100, 225, 75, 20)
platform4 = createSprite(250, 200, 75, 20)
platform5 = createSprite(325, 125, 75, 20)
platform6 = createSprite(200, 50, 75, 20)
platform7 = createSprite(50, 125, 75, 20)
}

function draw() {
  background(200);
  spawnDragonsLeft();
  spawnDragonsRight();
  player.velocityY=player.velocityY + 0.8
  player.collide(ground);
  player.collide(ceiling);
  player.collide(platform1);
  player.collide(platform2);
  player.collide(platform3);
  player.collide(platform4);
  player.collide(platform5);
  player.collide(platform6);
  player.collide(platform7);
  player.collide(wall1);
  player.collide(wall2);
  obstaclesGroup = new Group();
  obstaclesGroupp = new Group();
    if(keyDown("UP_ARROW")) {
      player.velocityY = -10;
    }
    if(keyDown("RIGHT_ARROW")){
      player.velocityX= 5
    }else{
      player.velocityX=0
    }
    if(keyDown("LEFT_ARROW")){
      player.velocityX= -5
    }
    
  drawSprites();
}
function spawnDragonsLeft() {
  if(frameCount % 30 === 0) {
    var obstacle = createSprite(0,0,10,40);
    obstacle.y=Math.round(random(0,475))
    //obstacle.debug = true;
    obstacle.velocityX = (8);
    
    obstacle.addImage(dragonI);
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 1.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

function spawnDragonsRight() {
  if(frameCount % 30 === 0) {
    var obstaclee = createSprite(500,0,10,40);
    obstaclee.y=Math.round(random(0,475))
    //obstacle.debug = true;
    obstaclee.velocityX = (8);
    
    obstaclee.addImage(dragonnI);
    //assign scale and lifetime to the obstacle           
    obstaclee.scale = 1.5;
    obstaclee.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroupp.add(obstaclee);
  }
}
