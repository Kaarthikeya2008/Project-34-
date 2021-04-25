const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 50, 50);
  box2 = new Box(650, 100, 50, 50);
  box3 = new Box(700, 100, 50, 50);
  box4 = new Box(750, 100, 50, 50);
  box5 = new Box(800, 100, 50, 50);
  box6 = new Box(625, 75, 50, 50);
  box7 = new Box(675, 75, 50, 50);
  box8 = new Box(725, 75, 50, 50);
  box9 = new Box(775, 75, 50 ,50);
  box10 = new Box(650, 50, 50, 50);
  box11 = new Box(700, 50, 50, 50);
  box12 = new Box(750, 50, 50, 50);
 

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display()
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}