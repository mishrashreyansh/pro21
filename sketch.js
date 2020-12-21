var bullet,wall;
var thickness;
var speed,weight;
var deformation;


function setup() {
  createCanvas(1600,400);
speed = Math.round(random(223,321));
weight = Math.round(random(30,52));
thickness = Math.round(random(22,83));
bullet = createSprite(50,200,50,50);
bullet.shapeColor = color(255);
bullet.velocityX = speed;
wall = createSprite(1500,200,thickness, height/2);
wall.shapeColor = color(80,80,80);





}

function draw() {
  background("black");
  
if(wall.x - bullet.x <(wall.width+bullet.width)/2)
{
  bullet.velocityX = 0;
  deformation = 0.5*weight*speed*speed/thickness*thickness*thickness;

 if(deformation>10)
 {
  wall.shapeColor = color(255,0,0);
 }

 if(deformation<100)
 {
  wall.shapeColor = color(0,255,0);
 }




}







  drawSprites();
}