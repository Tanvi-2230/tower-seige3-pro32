class Block{
    constructor(x, y, width, height, angle) {
        var options = {
           isStatic : false,
          'restitution' : 0.3,
          'friction' : 0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;

        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<10){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        }else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility-5;
          pop();
        }
      }

      score(){
        if(this.visibility <0 && this.visibility> -55){
          score ++;
        }
      }
}