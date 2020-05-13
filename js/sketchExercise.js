let ball = {
    x: 100,
    y: 100,
    speedx: 5,
    speedy: 6,
}
  
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('#9EFF00');

    triangle(mouseX, mouseY, 160, 180, 280, 200);
    triangle(mouseX, mouseY, 260, 200, 280, 200);
    // triangle(250, 80, 160, 180, 280, 200);

    let randomX = random(300, 400) 
    let randomY = random(400, 600)
    triangle(400, randomY, randomX, 500, 280, 200);
    triangle(100, randomY, randomX, 100, 280, 200);

    let randomXNew = random(100, 400) 
    let randomYNew = random(40, 600)
    triangle(40, randomYNew, randomXNew, 10, 280, 200);

    //Draw bounce ball with functions
    drawBall();
    move();
    bounce();

    //draw star
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 20.0);
    noStroke();
    star(mouseX - 200, mouseY - 200, 60, 100, 40);

    //draw rect
    rotate(frameCount / 10);
    rect(10, 400, 100, 30)
}

//Function draws star
function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let i = 0; i < TWO_PI; i += angle) {
        let sx = x + cos(i) * radius2;
        let sy = y + sin(i) * radius2;
        vertex(sx, sy);
        sx = x + cos(i + halfAngle) * radius1;
        sy = y + sin(i + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

//Functions for bounce ball
function drawBall(radiusX = 60, radiusY = 60) {
    for(let i = 0; i < 5; i++) {
        ellipse(ball.x, ball.y, radiusX , radiusY)
    }
    }
    function move() {
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