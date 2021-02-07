class Boulder{
    constructor(x,y,r){

    this.body = Bodies.circle(x,y,r);
    World.add(world,this.body);

    this.radius=r;
    }
    display(){
fill("blue");
ellipseMode(RADIUS);
ellipse(this.body.position.x,this.body.position.y,this.radius);

    }
}