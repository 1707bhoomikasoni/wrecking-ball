class Rope{
    constructor(bodyA,point1){
        var options={
            bodyA:bodyA,
            pointB:point1,
            length:250,
            stiffness:1.2
        }
    this.sling=Constraint.create(options)
    this.point1=point1
    World.add(world,this.sling)
    }
display(){
   var point1=this.sling.bodyA.position;
   var point2=this.point1
    line(point1.x,point1.y,point2.x,point2.y)
}

}