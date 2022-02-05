class Footballer 
{
    constructor(x, y, w, h)
    {
        const options = {
            isStatic: true
        };

        this.body = Matter.Bodies.rectangle(x, y, w, h, options);
        this.w = width;
        this.h = height;

        this.image = loadImage("assets/FootballerStanding.png");

        World.add(world, this.body);
    }

    display()
    {
    var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}