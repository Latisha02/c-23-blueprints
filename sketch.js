const Engine = Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var box1, box2;
var myEngine, myWorld, ground;
function setup() {
  createCanvas(800,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  box1 = new Box(200,200,50,60);
 box2=new Box(230,140,50,100) ;
 ground= new Ground(400,390,800,20)


}

function draw() {
  background(0);  
  Engine.update(myEngine);
  box1.display()
  box2.display()
  ground.display()
  
}