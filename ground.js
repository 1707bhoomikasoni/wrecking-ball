class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(400,700,800,30,options)
        World.add(world,this.body)
    }
display(){
rectMode(CENTER)
fill("green")
rect(this.body.position.x,this.body.position.y,800,30)
}

}