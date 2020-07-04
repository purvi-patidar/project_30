const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var stand,stand1,platform;
var block1,polygon,chain;


function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  stand = new Ground(600,250,200,20);
  stand1 = new Ground(1000,150,200,20);
  platform = new Ground(600,400,1200,20)
  block1 = new Box(532,229,30,35);
  block2 = new Box(560,229,30,35);
  block3 = new Box(590,229,30,35);
  block4 = new Box(610,229,30,35);
  block5 = new Box(640,229,30,35);
  block6 = new Box(669,229,30,35);
  block7 = new Box(560,192,30,35);
  block8 = new Box(590,192,30,35);
  block9 = new Box(610,192,30,35);
  block10 = new Box(640,192,30,35);
  block11 = new Box(585,157,30,35);
  block12 = new Box(615,157,30,35);
  block13 = new Box(600,122,30,35);

  block14 = new Box(927,120,30,35);
  block15 = new Box(960,120,30,35);
  block16 = new Box(990,129,30,35);
  block17 = new Box(1010,129,30,35);
  block18 = new Box(1040,129,30,35);
  block19 = new Box(1070,129,30,35);
  block20 = new Box(957,94,30,35);
  block21 = new Box(987,94,30,35);
  block22 = new Box(1008,94,30,35);
  block23 = new Box(1038,94,30,35);
  block24 = new Box(987,57,30,35);
  block25 = new Box(1013,57,30,35);
  block26 = new Box(1000,22,30,35);
  polygon = new Polygon(200,100);
  chain = new Chain(polygon.body,{x:300,y:100})
}

function draw(){
  background("black");
  text("PRESS SPACE KEY TO GET ONE MORE CHANCE",890,340)
  Engine.update(engine);

  stand.display();
  stand1.display();
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
  platform.display();
  polygon.display();
  chain.display();
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body, {x:mouseX,y:mouseY})
}

function mouseReleased(){
	chain.fly();
}

 function keyPressed(){
  if(keyCode===32){
      chain.attach(polygon.body);
   }
 }
