const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;
var redBall1,redBall2, redBall3, redBall4, redBall5, redBall6, redBall7, redBall8, redBall9;
var greyBall1, greyBall2, greyBall3, greyBall4, greyBall5, greyBall6, greyBall7, greyBall8, greyBall9;
var pinkBall1, pinkBall2, pinkBall3, pinkBall4, pinkBall5, pinkBall6, pinkBall7, pinkBall8, pinkBall9;
var rainbowBall1, rainbowBall2, rainbowBall3, rainbowBall4, rainbowBall5,rainbowBall6, rainbowBall7,rainbowBall8, rainbowBall9;
var blueBall1, blueBall2, blueBall3, blueBall4, blueBall5,blueBall6, blueBall7,blueBall8, blueBall9;
var backgroundImage;
var ground1;
var cannon;
function preload(){
   backgroundImage = loadImage("picture/bg img.png");
  
}

function setup() {
  var canvas = createCanvas(1200, 700)
  engine = Engine.create()
  world = engine.world;
  redBall1 = new RedBall(400, 50);
  redBall2 = new RedBall(450, 50);
  redBall3 = new RedBall(500, 50);
  redBall4 = new RedBall(550, 50);
  redBall5 = new RedBall(600, 50);
  redBall6 = new RedBall(650, 50);
  redBall7 = new RedBall(700, 50);
  redBall8 = new RedBall(750, 50);
  redBall9 = new RedBall(800, 50);
  

  greyBall1 = new GreyBall(400, 100);
  greyBall2 = new GreyBall(450, 100);
  greyBall3 = new GreyBall(500, 100);
  greyBall4 = new GreyBall(550, 100);
  greyBall5 = new GreyBall(600, 100);
  greyBall6 = new GreyBall(650, 100);
  greyBall7 = new GreyBall(700, 100);
  greyBall8 = new GreyBall(750, 100);
  greyBall9 = new GreyBall(800, 100);
  
  rainbowBall1 = new RainbowBall(400, 150);
  rainbowBall2 = new RainbowBall(450, 150);
  rainbowBall3 = new RainbowBall(500, 150);
  rainbowBall4 = new RainbowBall(550, 150);
  rainbowBall5 = new RainbowBall(600, 150);
  rainbowBall6 = new RainbowBall(650, 150);
  rainbowBall7 = new RainbowBall(700, 150);
  rainbowBall8 = new RainbowBall(750, 150);
  rainbowBall9 = new RainbowBall(800, 150);

  pinkBall1 = new PinkBall(400, 200);
  pinkBall2 = new PinkBall(450, 200);
  pinkBall3 = new PinkBall(500, 200);
  pinkBall4 = new PinkBall(550, 200);
  pinkBall5 = new PinkBall(600, 200);
  pinkBall6 = new PinkBall(650, 200);
  pinkBall7 = new PinkBall(700, 200);
  pinkBall8 = new PinkBall(750, 200);
  pinkBall9 = new PinkBall(800, 200);

  blueBall1 = new BlueBall(400, 250);
  blueBall2 = new BlueBall(450, 250);
  blueBall3 = new BlueBall(500, 250);
  blueBall4 = new BlueBall(550, 250);
  blueBall5 = new BlueBall(600, 250);
  blueBall6 = new BlueBall(650, 250);
  blueBall7 = new BlueBall(700, 250);
  blueBall8 = new BlueBall(750, 250);
  blueBall9 = new BlueBall(800, 250);

  ground1 = new Ground(1190, 350, 20, height);

  cannon = new Cannon(600, 625, 350, 150);
}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);
  redBall1.display();
  redBall2.display();
  redBall3.display();
  redBall4.display();
  redBall5.display();
  redBall6.display();
  redBall7.display();
  redBall8.display();
  redBall9.display();
  

  greyBall1.display();
  greyBall2.display();
  greyBall3.display();
  greyBall4.display();
  greyBall5.display();
  greyBall6.display();
  greyBall7.display();
  greyBall8.display();
  greyBall9.display();

  pinkBall1.display();
  pinkBall2.display();
  pinkBall3.display();
  pinkBall4.display();
  pinkBall5.display();
  pinkBall6.display();
  pinkBall7.display();
  pinkBall8.display();
  pinkBall9.display();

  rainbowBall1.display();
  rainbowBall2.display();
  rainbowBall3.display();
  rainbowBall4.display();
  rainbowBall5.display();
  rainbowBall6.display();
  rainbowBall7.display();
  rainbowBall8.display();
  rainbowBall9.display();

  blueBall1.display();
  blueBall2.display();
  blueBall3.display();
  blueBall4.display();
  blueBall5.display();
  blueBall6.display();
  blueBall7.display();
  blueBall8.display();
  blueBall9.display();
  cannon.display();
}