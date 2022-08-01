var boy,track,coin,obstacles;
var boyImg,trackImg,coinImg,obstacleImg;

function preload(){
boyImg= loadImage("boy.png");
trackImg=loadImage("track.jpg");
coinImg=loadImage("goldCoin.png");
obstacleImg=loadImage("obstacle.png");

}

function setup(){
createCanvas(windowWidth, windowHeight);
boy = createSprite(600,550,50,50);
  coin = createSprite(700,300,50,50);
  obstacles = createSprite(600,350,20,20);
}

function draw() {
 // background(trackImg);
 background("yellow");
 coin.addImage("coin",coinImg);
coin.scale=0.05
obstacles.addImage("obstacles",obstacleImg)
obstacles.scale=0.03
boy.addImage("boy",boyImg);
boy.scale=0.2;

  move();
  drawSprites();
}

function move(){
  if(keyDown("UP_ARROW")){
    //  boy.velocityX=0
    //  boy.velocityY=-3
    boy.velocityY=-5
       }
}