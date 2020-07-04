class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.visibility = 225;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 7){
      this.visibility = 255;
      var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(2);
    stroke("black")
    fill("pink");
    rect(0, 0, this.width, this.height);
    }else{
      World.remove(world,this.body);
      push()
      this.Visibility = this.Visibility - 2;
      tint(255,this.Visibility);
      pop();
    }
    
    pop();
  }
};
