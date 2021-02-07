class Chain{
constructor(body1,point2){
var op = {
bodyA:body1,
pointB:point2,
stiffness:2,
length:250
}
    this.constraint = Constraint.create(op)
World.add(world,this.constraint);

}

display(){
    
    
    push();
    strokeWeight(4);
    stroke("red");
    var point1 = this.constraint.bodyA.position;
line(point1.x,point1.y,this.constraint.pointB.x, this.constraint.pointB.y)
pop();
}

}