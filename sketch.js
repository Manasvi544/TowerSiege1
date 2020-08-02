const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function preload() {
  polygon_img=loadImage("Polygon.png");
}
function setup() {
  createCanvas(1000,400);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,height,1600,20);

  base = new Ground(390,150,250,10);
  base1 = new Ground(700,260,200,10);

  box1 = new Box(330,125,30,40);
  box2 = new Box(360,125,30,40);
  box3 = new Box(390,125,30,40);
  box4 = new Box(420,125,30,40);
  box5 = new Box(450,125,30,40);
  box6 = new Box(360,85,30,40);
  box7 = new Box(390,85,30,40);
  box8 = new Box(420,85,30,40);
  box9 = new Box(390,45,30,40);
  

  box10 = new Box(640,235,30,40);
  box11 = new Box(670,235,30,40);
  box12 = new Box(700,235,30,40);
  box13 = new Box(730,235,30,40);
  box14 = new Box(760,235,30,40);
  box15 = new Box(670,195,30,40);
  box16 = new Box(700,195,30,40);
  box17 = new Box(730,195,30,40);
  box18 = new Box(700,155,30,40);


  ball=Bodies.circle(50,200,20);
  World.add(world,ball);
  slingshot = new SlingShot(this.ball,{x:100, y:200});
}

function draw() {
  background("pink");  
  ground.display();
  base.display();
  base1.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  imageMode(CENTER);
  image(polygon_img,ball.position.x,ball.position.y,40,40);

  slingshot.display();
 
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
} 