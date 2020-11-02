class Chain{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX, y:this.offsetY},
            length: 200,
            stiffness:0.1
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
        push()
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y+this.offsetY);
        pop()
    }
    
}





