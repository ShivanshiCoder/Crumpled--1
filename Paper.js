class Paper  {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
        
      }
      this.x=x;
      this.y=y;
      this.r=radius;
      this.body=Bodies.circle(this.x,this.y,this.r/2,options);
      World.add(world, this.body);
    }
    display(){
      
       var  paperpos=this.body.position;

       push();
       translate(paperpos.x,paperpos.y);
       rectMode(CENTER);
       strokeWeight(3);

      ellipse(0,0,this.r,this.r);
      fill(255,0,255);
      pop();

      
    }
  }