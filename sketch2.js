var bullet, speed, weight;
var wall, thickness;

   

function setup(){
   createCanvas(1600,400);

   thickness=random(22,83);
    speed=random(233,321);
    weight=random(30,52); 

   wall=createSprite(1200,200,thickness,height/2);
   wall.shapeColor="black";
   bullet=createSprite(50,200,50,5);
   bullet.velocityX=speed;
   bullet.shapeColor="yellow";
}

function draw(){
    background(255);

    if(hasCollided(bullet,wall)){
        bullet.velocityX=0;

        var damage=0.5*weight*speed*speed/thickness*thickness*thickness;

        if(damage>=10){
            wall.shapeColor= color(250,0,0);
        }

        if(damage<10){
            wall.shapeColor= color(0,250,0);
        }
    }

    drawSprites();
}