class Balon
{
constructor(x, y)
    {
        options = {
            isStatic: true
        }

        this.r = 30;
        this.speed = 0.05;
        this.body = Matter.Bodies.circle(x, y, this.r, options);
        this.image = loadImage("assets/BalonFutbol.png");
        this.trajectory = [];
    }

    remove(index)
    {
        World.remove(world, this.body);
        delete playerBalls[index];
    }

    shoot()
    {
         
    }
}