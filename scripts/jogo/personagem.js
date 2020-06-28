// const personAltura = 135;
// const personLargura = 110;
// const frameAltura = 220;
// const frameLargura = 270;
// const tamMatrixQuadrada = 4;

let somDoPulo;

class Personagem extends Animacao{
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

        // this.frameAtual = -1;

        this.yInicial = height - altura - variacaoY;

        this.velocidadeDoPulo = 0;
        this.gravidade = 6;
        this.alturaDoPulo = -70;
        this.pulos = 0;
        this.invencivel = false;
        
        somDoPulo = new loadSound('sons/somPulo.mp3');
    }
    
    pula() {
        if(this.pulos < 2){
            this.velocidadeDoPulo = this.alturaDoPulo;
            somDoPulo.play();
            this.pulos++;
        }
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

        if(this.y > this.yInicial) {
            this.y = this.yInicial;
            this.pulos = 0;
        }
    }

    estaColidindo(inimigo) {

        if(this.invencivel) {
            return false;
        }

        noFill();
        rect(this.x, this.y, this.largura, this.altura);
        rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura);
        const precisao = .7;
        return collideRectRect(
            this.x,
            this.y,
            this.largura * precisao,
            this.altura * precisao,
            inimigo.x,
            inimigo.y,
            inimigo.largura * precisao,
            inimigo.altura * precisao,
        );
    }

    tornaIncencivel() {
        this.invencivel = true;
        setTimeout(() => {
            this.invencivel = false;
        }, 1000);
    }

    // exibe() {
    //     let pos = this.proximoFrame;
    //     image(this.imagem,
    //         0, windowHeight - personAltura,
    //         personLargura, personAltura,
    //         pos.x, pos.y,
    //         frameAltura, frameLargura
    //     );
    // }

    // get proximoFrame() {
    //     let pos = new Object();

    //     this.frameAtual = (++this.frameAtual < Math.pow(tamMatrixQuadrada, 2)) ? this.frameAtual : this.frameAtual = 0;

    //     pos.x = frameAltura * (this.frameAtual % tamMatrixQuadrada);
    //     pos.y = frameLargura * Math.floor(this.frameAtual / tamMatrixQuadrada);

    //     return pos;
    // }
}