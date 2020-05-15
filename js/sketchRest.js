let ball = {
    x: 100,
    y: 100,
    speedx: 3,
    speedy: 2,
}
  
let circleX = 0;
let speedCir = 20

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('#9EFF00');

    noStroke();
    //Draw bounce ball with functions
    drawBall();
    move();
    bounce();

    drawBall(mouseX, mouseY, 40, 40);

    ellipse(circleX, 500, 100, 100);
    if(circleX > width/2) {
    speedCir = -2;
    }  
    if(circleX < 10) {
    speedCir = 2;
    } 
    circleX = circleX + speedCir;

}


//Functions for bounce ball
function drawBall(positionX = ball.x, positionY = ball.y, radiusX = 60, radiusY = 60) {
    ellipse(positionX, positionY, radiusX , radiusY)
}
function move(positionX = ball.x, positionY = ball.y) {
    ball.x = ball.x + ball.speedx
    ball.y = ball.y + ball.speedy
}
function bounce() {
    if (ball.x > width || ball.x < 0) {
        ball.speedx = ball.speedx * -1
    } 
    if (ball.y > height || ball.y < 0) {
        ball.speedy = ball.speedy * -1
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
} 