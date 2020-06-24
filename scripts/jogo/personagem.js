const personAltura = 135;
const personLargura = 110;
const frameAltura = 220;
const frameLargura = 270;
const tamMatrixQuadrada = 4;

class Personagem {
    constructor(imagem) {
        this.imagem = imagem;

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