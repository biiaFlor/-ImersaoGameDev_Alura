function setup() {
  createCanvas(windowWidth, windowHeight);

  jogo = new Jogo();
  jogo.setup();
  
  frameRate(40)
  //somDoJogo.loop();
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  jogo.draw();
}