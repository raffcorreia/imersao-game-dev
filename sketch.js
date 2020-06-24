let imagemCenario;
let imagemPersonagem;
let cenario;
let personagem;
let somDoJogo;

var circleSize = 0;
var increment = 1;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png')
  imagemPersonagem = loadImage('imagens/personagem/correndo.png')
  somDoJogo = new loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  // somDoJogo.play();
  // frameRate(40);
  
  console.log('Setup');
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
  // background(imagemCenario);
  // image(imagemCenario, -50, 0, width, height);
  // image(imagemCenario, width - 48, 0, width, height);

  circle(mouseX, mouseY, circleSize)

  if (circleSize > 50) {
    increment = -1;
  } else if (circleSize < 1) {
    increment = 1;
  }

  circleSize += increment;
}