
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bobDiameter = 70;
function preload()
{
	
}

function setup() {
  
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1=new bob(800-bobDiameter*2,500,bobDiameter);
    bob2=new bob(800-bobDiameter*1,500,bobDiameter);
    bob3=new bob(800,500,bobDiameter);
    bob4=new bob(800+bobDiameter*1,500,bobDiameter);
    bob5=new bob(800+bobDiameter*2,500,bobDiameter);

	  ground1=new ground(800,100,600,30);

    rope1=new Chain(bob1.body,ground1.body,-bobDiameter*2,0);
    rope2=new Chain(bob2.body,ground1.body,-bobDiameter*1,0);
    rope3=new Chain(bob3.body,ground1.body,0,0);
    rope4=new Chain(bob4.body,ground1.body,bobDiameter*1,0);
    rope5=new Chain(bob5.body,ground1.body,bobDiameter*2,0);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
console.log("y"+bob1.y)
  background("white");
  Engine.update(engine)
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
    drawSprites();
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50*7/3,y:-45*7/3});

  }
}


