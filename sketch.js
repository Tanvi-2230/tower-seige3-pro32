const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1, ground2, ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10, box11, box12, box13, box14, box15, box16;

var box1a,box2a,box3a,box4a,box5a,box6a,box7a,box8a,box9a,box10a,
box11a, box12a, box13a, box14a, box15a, box16a;

var img, backgroundImg;
var rope, hexa, ball;

var score = 0;

function preload(){
  img = loadImage("polygon.png");
  backgroundImg = loadImage("light.jpg")
  getBackgroundImg();

}

function setup() {
  createCanvas(windowWidth, windowHeight);
   
  engine = Engine.create();
  world =  engine.world;

  var options = {
    'restitution' : 0.1,
    'friction' : 0,
    'density' : 0.2
  }
  hexa = Bodies.circle(50, 200, 20, options);
  World.add(world, hexa)
  rope = new Launcher(hexa, {x:150, y:200});

  

  ground =  new Ground(width/2, height-20, width, 20);
  ground1 =  new Ground(width/2+50, height-110, 450, 20);
  ground2 =  new Ground(width/2+ 500, height-260, 450, 20);


  box1 = new Block(width/2-120,350, 50, 60);
  box2 = new Block(width/2-66,350, 50, 60);
  box3 = new Block(width/2-12,350, 50, 60);
  box4 = new Block(width/2+42,350, 50, 60);
  box5 = new Block(width/2+96,350, 50, 60);
  box6 = new Block(width/2+150,350,50, 60)
  box7 = new Block(width/2+204,350,50, 60);


  box8 = new Block(width/2-66,290, 50, 60);
  box9 = new Block(width/2-12,290, 50, 60);
  box10 = new Block(width/2+42,290, 50, 60);
  box11 = new Block(width/2+96,290, 50, 60);
  box12 = new Block(width/2+150,290,50, 60);

  box13 = new Block(width/2-12,230, 50, 60);
  box14 = new Block(width/2+42,230, 50, 60);
  box15 = new Block(width/2+96,230, 50, 60);

  box16 = new Block(width/2+42,170, 50, 60);





  
  box1a = new Block(width/2+350,240, 50, 60);
  box2a = new Block(width/2+404,240, 50, 60);
  box3a = new Block(width/2+458,240, 50, 60);
  box4a = new Block(width/2+512,240, 50, 60);
  box5a = new Block(width/2+566,240,50, 60);
  box6a = new Block(width/2+620,240,50, 60);
  box7a = new Block(width/2+674,240,50, 60);

  box8a = new Block(width/2+404,180, 50, 60);
  box9a = new Block(width/2+458,180, 50, 60);
  box10a = new Block(width/2+512,180, 50, 60);
  box11a = new Block(width/2+566,180,50, 60);
  box12a= new Block(width/2+620,180,50, 60);

  box13a = new Block(width/2+458,120, 50, 60);
  box14a = new Block(width/2+512,120, 50, 60);
  box15a = new Block(width/2+566,120,50, 60);

  box16a = new Block(width/2+512,60, 50, 60);

}

function draw() {
  background(backgroundImg);  

  Engine.update(engine);

  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50);
  
  
  ground.display();
  ground1.display();
  ground2.display();

  fill("pink");

  box1.display();
  box1.score();

  box2.display();
  box2.score();

  box3.display();
  box3.score();

  box4.display();
  box4.score();

  box5.display();
  box5.score();

  box6.display();
  box6.score();

  box7.display();
  box7.score();

  fill("cyan")
  box8.display();
  box8.score();

  box9.display();
  box9.score();
  
  box10.display();
  box10.score();
  
  box11.display()
  box11.score();
  
  box12.display()
  box12.score();

  fill("lightgreen");
  box13.display();
  box13.score();

  box14.display();
  box14.score();

  box15.display();
  box15.score();

  fill("yellow");
  box16.display();
  box16.score();


  fill("pink");
  box1a.display();
  box1a.score();

  box2a.display();
  box2a.score();
  
  box3a.display();
  box3a.score();
  
  box4a.display();
  box4a.score();
  
  box5a.display();
  box5a.score();
  
  box6a.display();
  box6a.score();
  
  box7a.display();
  box7a.score();

  fill("cyan")
  box8a.display();
  box8a.score();

  box9a.display();
  box9a.score();

  box10a.display();
  box10a.score();

  box11a.display()
  box11a.score();

  box12a.display()
  box12a.score();


  fill("lightgreen");
  box13a.display();
  box13a.score();

  box14a.display();
  box14a.score();

  box15a.display();
  box15a.score();

  fill("yellow");
  box16a.display();
  box16a.score();

  rope.display();
 
  imageMode(CENTER);
  image(img, hexa.position.x, hexa.position.y, 40, 40 )

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(hexa, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
    rope.attach(hexa);
  }
}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  console.log(response);
  var responseData = await response.json();
  console.log(responseData);
  var dateTime = responseData.datetime;
  console.log(dateTime);
  var hour = dateTime.slice(11,13);
  console.log(hour);

  if(hour>=06 && hour<= 18){
    backgroundImg = loadImage("light.jpg")
  }
  else{
    backgroundImg = loadImage("dark.jpeg");
  }
}