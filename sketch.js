const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper1,side1,side2,side3,bin,launcher1;

function preload(){
	bin = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,800,20);
	paper1 = new Paper(380,600,20);
	side1 = new Dustbin(410,400,10,100);
	side2 = new Dustbin(510,400,10,100);
	side2.addImage(bin);
	side3 = new Dustbin(470,400,100,10);

	launcher1 = new launcher(paper1.body,{x:380, y:680});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(250);
  imageMode(CENTER);
  image(this.image, 0, 0, this.width, this.height);
   ground.display();
   paper1.display();
   side1.display();
   side2.display();
   side3.display();
   launcher1.display();
}

function keypressed(){
	if (keycode === UP_ARROW){
		Matter.Body.applyforce(paper1.body, paper1.body.position,{x:85, y:-85})
	}
}

function mouseDragged(){
    if(gameState!== "launched"){
    Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
   launcher="launched";
}

function keyPressed(){
    if(keyCode === 32){
    launcher1.attach(paper1.body);
    }
}
