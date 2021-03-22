const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
function setup(){
    createCanvas(600,500);
    engine=Engine.create();
    world=engine.world;

    ground=new Ground(300,580,600,40);
}

function draw(){
    Engine.update(engine);

    ground.display();
}
function mouseDragged(){

}
function mouseReleased(){

}
