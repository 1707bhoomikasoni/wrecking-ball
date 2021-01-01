class Box{
    constructor(x,y){
        var options={
            isStatic:false,
            friction:3,
            restitution:0.3,
            density:1.4
        }
        this.body=Bodies.rectangle(x,y,70,70,options)
        World.add(world,this.body)
    }
display(){
    push()
rectMode(CENTER)
fill("pink")
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
rect(0,0,70,70)
pop()
}

}