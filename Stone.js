class Stone{
    constructor(x,y,w,h){
      var options={
        restitution:0,
        friction:1,
        density:1.2
    }
      
        this.body = Bodies.circle(x, y, 45, options);
        this.radius = 45;
        this.image = loadImage('stone.png')
        
        World.add(world, this.body);
    }
      
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER)
      image(this.image, 0, 0, this.radius, this.radius)
      pop()
      
    }
}
