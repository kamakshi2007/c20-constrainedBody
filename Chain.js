class Chain {
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.05
        }
        this.body = Constraint.create(options);
        World.add(world,this.body);
    }
       display(){
           var pointA =  this.body.bodyA.position;
           var pointB =  this.body.bodyB.position;
           push();
           strokeWeight(2);
           line(pointA.x,pointA.y,pointB.x,pointB.y);
           pop();
       }
}