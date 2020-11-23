var bullet, speed, weight;
var wall, thickness;

thickness=random(22,83);
speed=random(233,321);
weight=random(30,52);    

function setup(){
   createCanvas(1600,400);

   bullet.velocityX=speed;
   wall=createSprite(1200,200,thickness,height/2);

}

function draw(){
    background(80,80,80);

    if(hasCollided(bullet,wall)){
        bullet.velocityX=0;

        var damage=0.5*weight*speed*speed/thickness*thickness*thickness;

        if(damage>=10){
            wall.shapecolor= color(250,0,0);
        }

        if(damage<10){
            wall.shapecolor= color(0,250,0);
        }
    }

    drawSprites();
}