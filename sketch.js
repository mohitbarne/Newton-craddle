
var ball1, ball2, ball3, ball4, ball5, rope1, rope2, rope3, rope4, rope5

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, 70, width, 20)

	ball1 = new Ball(210,600,50)
	ball2 = new Ball(310,600,50)
	ball3 = new Ball(410,600,50)
	ball4 = new Ball(510,600,50)
	ball5 = new Ball(610,600,50)

	rope1 = new Chain(ball1.body, ground.body, -100, 10)
	rope2 = new Chain(ball2.body, ground.body, -50, 10)
	rope3 = new Chain(ball3.body, ground.body, 0,10)
	rope4 = new Chain(ball4.body, ground.body, 50, 10)
	rope5 = new Chain(ball5.body, ground.body, 100, 10)






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  ground.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  drawSprites();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball1.body, ball1.body.position,{x:-50,y:-45} )
	}
}

