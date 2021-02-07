const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState="hang";

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground();
  boulder = new Boulder(200,200,30);

  chain = new Chain(boulder.body,{x:200,y:100});
  
  block1= new Block(500,200,40,50);
  block2= new Block(550,200,40,50);
  block3= new Block(600,200,40,50);
  block4= new Block(500,150,40,50);
  block5= new Block(550,150,40,50);
  block6= new Block(600,150,40,50);
  block7= new Block(500,100,40,50);
  block8= new Block(550,100,40,50);
  block9= new Block(600,100,40,50);
  block10= new Block(500,50,40,50);
  block11= new Block(550,50,40,50);
  block12= new Block(600,50,40,50);
  block13= new Block(500,25,40,50);
  block14= new Block(550,25,40,50);
  block15= new Block(600,25,40,50);
  block16= new Block(500,10,40,50);
  block17= new Block(550,10,40,50);
  block18= new Block(600,10,40,50);
  block19= new Block(450,200,40,50);
  block20= new Block(450,150,40,50);
  block21= new Block(450,100,40,50);
  block22= new Block(450,50,40,50);
  block23= new Block(450,25,40,50);
  block24= new Block(450,10,40,50);
  block25= new Block(400,200,40,50);
  block26= new Block(400,150,40,50);
  block27= new Block(400,100,40,50);
  block28= new Block(400,50,40,50);
  block29= new Block(400,25,40,50);
  block30= new Block(400,10,40,50);
}

function draw() {
  background(0);  
  Engine.update(engine);
  
  ground.display();
  boulder.display();
  chain.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();

  
}

function mouseDragged(){
  if(gameState==="hang"){
    Matter.Body.setPosition(boulder.body, {x: mouseX , y: mouseY});
  }
}