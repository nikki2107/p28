
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
  
var mango1;
var ground1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    mango1 = new Mango(170,0,50,50)
	ground1 = new Ground(400,700,840,45)
    Engine.run(engine);

}


function draw() {
  
	Engine.update(engine);
  

  background(180,150);
  mango1.display();
  ground1.display();
}



