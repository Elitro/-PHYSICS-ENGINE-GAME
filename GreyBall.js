class GreyBall{
    constructor(x, y, r){
        var options ={
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, 50, options);
        this.grey = loadImage("balls/grey ball.png")
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.grey, 0, 0, 50, 50);
        pop();
    }
}