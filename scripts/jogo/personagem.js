const personAltura = 135;
const personLargura = 110;
const frameAltura = 220;
const frameLargura = 270;
const tamMatrixQuadrada = 4;

class Personagem {
  constructor(imagem) {
    this.imagem = imagem;

    /*
    Não estou usando a matriz mas deixei aqui para referencia
    */
    // this.matriz = [
    //   [0, 0],
    //   [220, 0],
    //   [440, 0],
    //   [660, 0],
    //   [0, 270],
    //   [220, 270],
    //   [440, 270],
    //   [660, 270],
    //   [0, 540],
    //   [220, 540],
    //   [440, 540],
    //   [660, 540],
    //   [0, 810],
    //   [220, 810],
    //   [440, 810],
    //   [660, 810],
    // ];

    this.frameAtual = -1;

  }

  exibe() {
    let pos = this.proximoFrame;
    image(this.imagem, 
          0, windowHeight - personAltura, 
          personLargura, personAltura, 
          pos.x, pos.y, 
          frameAltura, frameLargura
    );
  }

  anima() {

  }

  get proximoFrame() {
    let pos = new Object();

    this.frameAtual = (++this.frameAtual < Math.pow(tamMatrixQuadrada, 2)) ? this.frameAtual : this.frameAtual = 0;
    
    pos.x = frameAltura * (this.frameAtual % tamMatrixQuadrada);
    pos.y = frameLargura * Math.floor(this.frameAtual / tamMatrixQuadrada);

    return pos;
  }
}