
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	Diameter=40
	BobPositionX=width/2;
	BobPositionY=height/4+500;

	roofObject=new roof(width/2,height/4,width/7,20);

	bob1=new bob(BobPositionX-Diameter*2,BobPositionY,Diameter);
	bob2=new bob(BobPositionX-Diameter,BobPositionY,Diameter);
	bob3=new bob(BobPositionX,BobPositionY,Diameter);
	bob4=new bob(BobPositionX+Diameter,BobPositionY,Diameter);
	bob5=new bob(BobPositionX+Diameter*2,BobPositionY,Diameter);
  
	//Create a Ground
	

	var ender = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  
  
	  rope1=new rope(bob1.body,roofObject.body,-Diameter*2, 0)
  
	  rope2=new rope(bob2.body,roofObject.body,-Diameter*1, 0)
	  rope3=new rope(bob3.body,roofObject.body,0, 0)
	  rope4=new rope(bob4.body,roofObject.body,Diameter*1, 0)
	  rope5=new rope(bob5.body,roofObject.body,Diameter*2, 0)
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();

  
 
}



function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

  	}
}


