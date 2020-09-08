class Ground{
    constructor(){
    var options = { isStatic:true   }
    this.ground=Bodies.rectangle(450,500,900,20,options);
  
    World.add(world,this.ground);
    }
    display(){
        

        rectMode(CENTER);
        fill(188,67,67);
        stroke(255)
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
}