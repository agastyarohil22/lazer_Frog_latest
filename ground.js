class Ground{

    constructor(x,y,width,height){
        var body_options ={
            isStatic:true
        }
    
        this.body = Bodies.rectangle (x,y,width,height,body_options);
    this.width=width;
    this.height=height;
    
        World.add(world,this.body);
    
    
        
    }
    
    
    
    display(){
    
    var pos= this.body.position
    push ();
    // translate (pos.x,pos.y);
    // rotate (this.body.angle );
    fill ("black");
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);    
    pop ();
    }
    }