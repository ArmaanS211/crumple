
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ground;
var side1;
var side2;
var ball;
var ballO;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	var ballO = {restitution:0.8, density:1, friction:1};

	//Create the Bodies Here.
	ground = new Ground(400, 390, 1200, 10);
	side1 = new Ground(650, 345, 5, 75);
	side2 = new Ground(730, 345, 5, 75);
	ball = Bodies.circle(150, 50, 25, ballO);
	World.add(world, ball);
	console.log(ball);


	
  
}


function draw() {
  rectMode(CENTER);
  Engine.run(engine);
  background(0);

  ground.display();
  side1.display();
  side2.display();

  ellipse(ball.position.x, ball.position.y, 25, 25);
  
  drawSprites();

 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Body.applyForce(ball, ball.position, {x:100, y:-70});

	}
}



