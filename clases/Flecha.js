class Flecha{
    constructor(x, y, w, h, angle){


        this.body = Matter.Bodies.rectangle(x, y, w, h, angle);
        this.w = width;
        this.h = height;
        this.angle = angle;
        this.image = loadImage("assets/Flecha.png");
        World.add(world, this.body);
    }

    display()
    {
        if(keyIsDown(LEFT_ARROW) && this.angle<70){
            this.angle += 1;
        }

        if(keyIsDown(RIGHT_ARROW) && this.angle>-30){
            this.angle -= 1;
        }

        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}