let ball = {
    x: 100,
    y: 100,
    speedx: 2,
    speedy: 3,
  }
  
  function setup() {
    let myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent("canvas");
    background('#9EFF00');
  }
  
  function draw() {
    noStroke();

    //Draw bounce ball with functions
    drawBall();
    move();
    bounce();
    
    //draw star
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 300.0);
    changeShapeFill();
    noStroke();
    star(mouseX - 200, mouseY - 200, 60, 100, 40);
    
    //draw rect
    noStroke();
    rotate(frameCount / 600);
    rect(-10, 400, 400, 300)
    
    changeShapeFill();

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
  
  function drawBall() {
    for(let i = 0; i < 5; i++) {
      ellipse(ball.x, ball.y, 60, 60)
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
  
  function changeShapeFill() {
      shapeColor = map(mouseY, mouseX, 0, 255, 200);
      fill(shapeColor);
      stroke(shapeColor)
  }
  
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }