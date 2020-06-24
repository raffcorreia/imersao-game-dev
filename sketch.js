let imagemCenario;
let imagemPersonagem;
let cenario;
let personagem;
let somDoJogo;

function preload() {
    imagemCenario = loadImage('imagens/cenario/floresta.png')
    imagemPersonagem = loadImage('imagens/personagem/correndo.png')
    somDoJogo = new loadSound('sons/trilha_jogo.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario, 3);
    personagem = new Personagem(imagemPersonagem);
    somDoJogo.loop();
    // frameRate(40);

    console.log('Setup');
}

function draw() {
    cenario.exibe();
    cenario.move();
    personagem.exibe();
}