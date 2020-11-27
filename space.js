class Space{

    constructor(x,y,width,height){
        var body_options ={
            restitution: 0.2,
            friction :1.0,
            density :1.0
        }
    
        this.bodies = Bodies.rectangle (x,y,width,height,body_options);
    this.width=width;
    this.height=height;
    
        World.add(world,this.bodies);
    
    
        
    }
    
    
    
    display(){
    
    var pos= this.bodies.position
    push ();
    translate (pos.x,pos.y);
    rotate (this.bodies.angle );
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop ();
    }
    }