let imagemCenario;
let imagemPersonagem;
let somDoJogo;

function preload(){
  imagemPersonagem = loadImage( 'imagens/personagem/correndo.png');
  imagemCenario = loadImage( 'imagens/cenario/floresta.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() { //executada uma vez antes do jogo começar
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Persongem(imagemPersonagem);
  frameRate(40);
  somDoJogo.loop();
}

function draw() { //Renderizada constantemente no navegador
  
  //background(220); -> Define uma cor solida para o fundo
  //circle(mouseX,mouseY,250); -> cria um circulo que acompanha a posição do mouse
  cenario.exibe();
  cenario.move();
  
  personagem.exibe();
}