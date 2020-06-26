let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let cenario;
let personagem;
let inimigo;

let somDoJogo;
let somEstaTocando = false;

const matrizInimigo = [
        [0, 0],
        [104, 0],
        [208, 0],
        [312, 0],
        [0, 104],
        [104, 104],
        [208, 104],
        [312, 104],
        [0, 208],
        [104, 208],
        [208, 208],
        [312, 208],
        [0, 312],
        [104, 312],
        [208, 312],
        [312, 312],
        [0, 416],
        [104, 416],
        [208, 416],
        [312, 416],
        [0, 520],
        [104, 520],
        [208, 520],
        [312, 520],
        [0, 624],
        [104, 624],
        [208, 624],
        [312, 624],
    ];

const matrizHipsta =[
        [0, 0],
        [220, 0],
        [440, 0],
        [660, 0],
        [0, 270],
        [220, 270],
        [440, 270],
        [660, 270],
        [0, 540],
        [220, 540],
        [440, 540],
        [660, 540],
        [0, 810],
        [220, 810],
        [440, 810],
        [660, 810],
    ];
    
function preload() {
    imagemCenario = loadImage('imagens/cenario/floresta.png')
    imagemPersonagem = loadImage('imagens/personagem/correndo.png')
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png')
    somDoJogo = new loadSound('sons/trilha_jogo.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario, 3);
    personagem = new Personagem(matrizHipsta, imagemPersonagem, 0, 110, 135, 220, 270);
    inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 50, 52, 52, 104, 104);
    // frameRate(40);

    console.log('Setup');
}

function keyPressed(){
    if(key === 'ArrowUp') {
        personagem.pula();
    }
}

function draw() {
    cenario.exibe();
    cenario.move();
    
    inimigo.exibe();
    inimigo.move();

    personagem.exibe();
    personagem.aplicaGravidade();
}

function mouseClicked() {
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
      if (!somEstaTocando) {
        somDoJogo.loop();
        somEstaTocando = true;
      } else {
        somDoJogo.stop();  
        somEstaTocando = false;
      }
    }
}