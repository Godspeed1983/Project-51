var Bird;
var Pipe1,Pipe2;
var ground,bg;

var Pipe1Img,Pipe2Img;
var BirdImg,GroundImg,bgImg






function preload () {
  bgImg = loadImage("bg.png");
  GroundImg = loadImage("Ground 1.png")
  BirdImg = loadImage("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png")
  Pipe1Img = loadImage("pipe.png")
  Pipe2Img = loadImage("pipedown.png")
}








function setup() {
  createCanvas(700,600);
  


  ground = createSprite(width/2,height-10,500,300);
  ground.addImage(GroundImg);
  ground.scale=1;

  bird=createSprite(150,200,25,25)
  bird.addImage(BirdImg)
  bird.scale=0.2;









}

function draw() {
  background(bgImg);  


























  drawSprites();
}