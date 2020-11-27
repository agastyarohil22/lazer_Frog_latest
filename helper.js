
function spawMonster (){
    if(frameCount%60===0){
    var monster = createSprite(600,120,40,10);
      monster.y=Math.round(random(80,120));
    //   monster.addImage(cloudImage);
      monster.velocityX = -3;
      monster.scale=0.5;
      monster.depth=trex.depth;
      trex.depth++;
      monster.lifetime=200;
    }
    }