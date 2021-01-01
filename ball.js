class Ball{
    constructor(){
     this.body=Bodies.circle(200,400,50)
     World.add(world,this.body)
    }

display(){
   var pos=this.body.position 
   ellipseMode(RADIUS)
   ellipse(pos.x,pos.y,50)
}

}