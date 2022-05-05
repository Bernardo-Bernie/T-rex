var trex, trex_running, edges;
var groundImage;
var cloud, cloudImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200);
  ground = createSprite (200,190,400,10);
  ground.addImage (groundImage);
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50;
  ground.velocityX = -3;
}


function draw(){
  //definir a cor do plano de fundo 
  background("white");

  //registrando a posição y do trex
  // console.log(trex.y);
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  if (ground.x<0){
    ground.x =ground.width/2;

  }
 //impedir que o trex caia
  trex.collide(ground);

  createClouds();

  drawSprites();
}

function createClouds()
{
  if (frameCount % 60 ===0){
    var randNumber = Math.round(random(10,60));
    cloud = createSprite(600, 100, 40, 10);
    cloud.addImage(cloudImage);
    cloud.velocityX = -3;
    cloud.scale = 0.5;
    cloud.y = randNumber;
    
  }
}