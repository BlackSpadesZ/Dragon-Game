var bg,bgImg;
var player, playerImg;
var dragon, dragonImg;
var dragonGroup;
var bullet, bulletImg, bulletGroup;
var score = 0;

function preload() {
    bgImg = loadImage('gameBg.png');
    playerImg = loadImage('shoot3.png');

    dragonImg = loadImage('dragon.png');

    bulletImg = loadImage('bullet.png');
}

function setup() {
    createCanvas(700, 550);
    bg = createSprite(650, 300 );
    bg.addImage(bgImg);
    bg.velocityX = -4;
    bg.scale = 1;

    player = createSprite(50, 500);
    player.addImage(playerImg);

    bulletGroup = new Group;
    dragonGroup = new Group;
    
    score = 0;
    stroke('black');
    fill('black');
    textSize(20);
}

function draw () {
    background(0);
    

    if(bg.x < 300) {
        bg.x = bg.width/2;
    }

    if(keyDown("UP_ARROW")){
        player.y = player.y - 8;
       }

       if(keyDown('DOWN_ARROW')){
           player.y = player.y + 8;
       }

       if(keyDown('space')){
        bullet = createSprite(player.x, player.y);
       bullet.addImage(bulletImg);
       bullet.velocityX = 5;
       bulletGroup.add(bullet);
       bullet.scale = 0.15;
       }

       if(bulletGroup.isTouching(dragonGroup)){
           dragonGroup[0].destroy();
           bulletGroup[0].destroy();

           score = score + 50;
       }
       
       
       spawnDragons();
    drawSprites();

    text('Score: ' + score,300,50);
}

function spawnDragons() {
    if(World.frameCount % 150 === 0){
        dragon = createSprite(700, 300);
        dragon.addImage(dragonImg);
        dragon.velocityX = -(5 + score/100);
        dragon.y = Math.round(random(600, 50));
        dragonGroup.add(dragon);
        dragon.scale = 0.15;
    }
}