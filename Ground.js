class Ground{
constructor(){
    this.body = Bodies.rectangle(400,390,800,10,{isStatic:true});
    World.add(world,this.body);
}
display(){
    rectMode(CENTER);
    push();
     fill("green");
    rect(this.body.position.x,this.body.position.y,800,10);
    pop();
}


}