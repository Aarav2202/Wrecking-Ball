const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;


function setup() {
	createCanvas(1000, 500);
	engine = Engine.create();
	world = engine.world;

	ball=new Ball(400,350,50); 
  box1=new Box(600,440,100,100);
  box2=new Box(600,340,100,100);
  box3=new Box(600,240,100,100);

  box4=new Box(700,440,100,100);
  box5=new Box(700,340,100,100);
  box6=new Box(700,240,100,100);
	
	groundObject=new ground(width/2,500,width,20);
	launcherObject=new launcher(ball.body,{x:400,y:50})
  
  
	
	Engine.run(engine);
 // Render.run(render);
}

function draw() {

  background(230);
  
  ball.display();
  groundObject.display();
  launcherObject.display();
  box1.display();
  box2.display();
  box3.display();

  box4.display();
  box5.display();
  box6.display();
}

function mouseDragged()
{
	Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY}) 
}