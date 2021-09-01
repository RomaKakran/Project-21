
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground, groundObj;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,390,400,20);

var ball_options={
	isStatic:false,
	restiution:0.3,
	friction:0,
	density:1.2
}
	//Create the Bodies Here.

	Engine.run(engine);

	display()
		groundObj.display();
		groundObj=new ground(width/2,670,width,20);
		leftSide = new ground(1100,600,20,120);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




