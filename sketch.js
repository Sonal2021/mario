var mario,mario_running;
var pipe,pipe_img;
var ground
var killer,killer_running;
var pipegrp

function preload(){
mario_running = loadAnimation("mario1.png","mario2.png")
pipe_img= loadImage("pipes.png")
killer_running= loadAnimation("enemy1.png","enemy2.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight)
//create a mario sprite
mario=createSprite(50,600,20,50)
mario.addAnimation("running", mario_running)
mario.scale=0.4
ground= createSprite(width/2,600,10000,10);
pipegrp=new Group()
}

function draw(){
background("white")
if(keyDown("space")&& mario.y>=547.75){
    mario.velocityY=-12
}
mario.velocityY=mario.velocityY+0.5
console.log(mario.y)
mario.collide(ground)

draw_pipe()
draw_ene()
drawSprites();
}
function draw_pipe(){
    if(frameCount% 200==0){
        pipe = createSprite(900,547,20,50);
        pipe.addImage("pipee",pipe_img)
        pipe.scale=0.6
        pipe.velocityX=-3
            }
}

function draw_ene(){
    if(frameCount%150==0){
        killer = createSprite(900,547,20,50)
        killer.addAnimation("killer",killer_running)
        killer.scale=0.2
        killer.velocityX=-3
    }
}
