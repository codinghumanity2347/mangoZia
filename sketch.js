const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var treeImage;

function preload(){
  treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(1350, 660);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Box(width/2, 650, 1350, 20, {isStatic:true})
    stone1 = new Stone(185, 495, 40, 40)
    boy1 = new Boy(stone1.body, {x:185, y:495})
    mango1 = new Mango(850, 300, 75, 75)
    mango2 = new Mango(1110, 390, 55, 55)
    mango3 = new Mango(1000, 390, 45, 45)
    mango4 = new Mango(1000, 320, 75, 75)
    mango5 = new Mango(1073, 331, 55, 55)
    mango6 = new Mango(880, 350, 55, 55)
    mango7 = new Mango(1000, 263, 55, 55)
    mango8 = new Mango(750,370, 45, 45)

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background('skyBlue');
  Engine.update(engine)
  image(treeImage,650,250,550,400);
  ground.display();
  stone1.display();
  text(mouseX+","+mouseY,mouseX,mouseY)
  boy1.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();  
  mango8.display();
push();

fill("yellow")
ellipse(50, 50, 140)
pop();

fill("blue")
textSize(20)
text("POINT", 555, 50)

fill("red")
textSize(20)
text("ON", 620, 50)

fill("green")
textSize(20)
text(" THE ", 650, 50)

fill("orange")
textSize(20)
text("MANGOES ", 700, 50)

fill("black")
textSize(20)
text("TO", 805, 50)

fill("magenta")
textSize(20)
text("SHOOT", 840, 50)

fill("yellow")
textSize(20)
text("THEM", 915, 50)
  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
  detectollision(stone1,mango8);
}

function mouseDragged(){
  Body.setPosition(stone1.body, {x:mouseX, y:mouseY})
  }
  
  function mouseReleased(){
  boy1.fly()
  }
  
  function keyPressed(){
      if(keyCode == 32){
          boy1.attach(stone1.body);
      }
  }



  function detectollision(lstone,lmango){
    /*var collision = Matter.SAT.collides(lstone,lmango);
    if(collision.collided){
      console.log("collided");
      Matter.Body.setStatic(lmango,false);	
    }*/
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    //console.log(distance)
   // console.log(lmango.r+lstone.r)
      if(distance<=lmango.radius+lstone.radius)
      {
        //console.log(distance);
        Matter.Body.setStatic(lmango.body,false);
      }
  }