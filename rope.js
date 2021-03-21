class Chain{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            PointB:{x:offsetX,y:offsetY},
            length:500
            
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        
     //   strokeWeight(4);
        fill("white")
        line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y+this.offsetY);
    }
    
}