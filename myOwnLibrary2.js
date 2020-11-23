//has collided function

function hasCollided(wall, bullet){

bulletRightEdge=bullet.width+bullet.x;
wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge){
    return true;
}

return false;
}