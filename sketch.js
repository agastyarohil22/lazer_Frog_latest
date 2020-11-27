const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var frog , ground;
var space , ground2;

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    frog = new Frog(200,500,60,60);
    ground = new Ground(windowWidth/2,windowHeight-20,windowWidth,20);
    ground2 = new Ground(windowWidth/2,70,windowWidth,20);



    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);

if (keyCode===37){

frog.bodies.position.x = frog.bodies.position.x-1;

}

if (keyCode===39){

    frog.bodies.position.x = frog.bodies.position.x +1;

}
    frog.display();
    ground.display();
    ground2.display();
    spawnEnemy();
    drawSprites();
}
function spawnEnemy(){
if(frameCount%60===0){
var enemy=createSprite(210,50,50,50);
// enemy.x=random(ground2.x-60,ground2.x-10);
enemy.velocityX=4;



}



}