class Presentation{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }

       this.body = Bodies.rectangle(x, y, width, height, options);
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
       this.image = loadImage("assets/AXHL_presenta.png");

      World.add(world, this.body);
    }

    display(){
    var pos = this.body.position;
         push();
         translate(pos.x, pos.y);
         imageMode(CENTER);
         image(this.image, 0, 0, this.w, this.h);
         pop();
    }
}