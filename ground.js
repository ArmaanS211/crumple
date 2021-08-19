class Ground{
    constructor(x, y, w, h){

        this.x = x;
        this.y = y;
        this.w =w;
        this.h = h;

        var rectO = {isStatic: true};

        this.ground = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h, rectO);
        World.add(world, this.ground);
    }

    display(){
        rectMode(CENTER);
        rect(this.ground.position.x, this.ground.position.y, this.w, this.h);
    }

    
}