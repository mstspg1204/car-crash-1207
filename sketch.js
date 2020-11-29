var bullet  , wall ; 
var speed , weight ;
var thickness ; 








function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
 weight = random(30,52);
 thickness =  random(22,83)
 wall = createSprite(1200,200,thickness,200);
wall.shapeColor=80,80,80;
wall.debug = true;
 bullet= createSprite(50,200,50,10);
 bullet.shapeColor = 255;
 bullet.velocityX = speed; 
bullet.debug = true;



}

function draw() {
  background(0)
if (bullet.collide(wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * bulletspeed *bulletweight *bulletspeed/ (thickness*thickness*thickness);
  if (damage>10){
    wall.shapeColor = color(255,0,0);
  }
  if (damage <10){
    wall.shapeColor = color(0,255,0);

  }
}
  drawSprites()
}

