const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myEngine, myWorld, ball
var ground
var box1 
function setup() {
  createCanvas(800,400);
  myEngine = Engine.create()
  myWorld = myEngine.world
  var ball_option ={
    restitution:1


  }
  // corrected this. only one radius.
  ball = Bodies.circle(300, 100, 30, ball_option)
  var ground_option ={
isStatic:true


  }
  ground = Bodies.rectangle(400, 390, 800, 20, ground_option)
  World.add(myWorld, ball);
  World.add(myWorld, ground)
  box1 = new Box(200, 240, 20, 40)
  console.log(ball)
}

function draw() {
  background(255,255,255);  
  Engine.update(myEngine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 30, 30)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 800, 20)
  box1.display()
}