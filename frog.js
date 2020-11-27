class Frog{

constructor(x,y,width,height){
    var body_options ={
        restitution: 0.2,
        friction :1.0,
        density :1.0
    }

    this.body = Bodies.rectangle (x,y,width,height,body_options);
this.width=width;
this.height=height;
this.image=loadImage("resoursces/frog.png");
    World.add(world,this.body);


    
}



display(){

var pos= this.body.position
push ();
translate (pos.x,pos.y);
rotate (this.body.angle );
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);
fill ("green");
pop (); 
}
}