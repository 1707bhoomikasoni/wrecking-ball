const Engine=Matter .Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var engine,world
var ball,ground,sling
var box1=[]
var box2=[]
var box3=[]

function setup() {
 engine=Engine.create();
 world=engine.world;

 for(var i=0;i<8;i++){
   box1.push(new Box(400,50))
 }

 for(var k=0;k<9;k++){
  box2.push(new Box(500,50))
}

for(var k=0;k<10;k++){
  box3.push(new Box(600,50))
}


  createCanvas(1000,700);
ball=new Ball()
ground=new Ground()
sling=new Rope(ball.body,{x:200,y:50})

}

function draw() {
  background(255,255,255); 
  Engine.update(engine) 
ground.display()
  ball.display()
  sling.display()

  for(var j=0;j<box1.length;j++){
    box1[j].display()
  }

  for(var j=0;j<box2.length;j++){
    box2[j].display()
  }

  for(var j=0;j<box3.length;j++){
    box3[j].display()
  }
}

function mouseDragged(){
      Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }