var bullet,wall
var speed,weight



function setup() {
  createCanvas(1600,400);
  speed =random(55,90)
  weight =random(400,1500)
  bullet= createSprite(50, 200, 10, 5);
  bullet.shapeColor = "white";
  bullet.velocityX=speed;
  bullet.shapeColor = color(225);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80)

}

function draw() {
  background(0);  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {bullet.velocityX=0;
  var deformation = 0.5 * weight * speed * speed/22509;
  if(deformation>180)
  {wallshapeColor=color(225,0,0);
  }
  if(deformation<180&&deformation>100)
  {wall.shapeColor=color(230,230,0);}
  if(deformation<100)
  {
    wall.shapeColor = color(0,225,0);
  }

}
  drawSprites();
  }