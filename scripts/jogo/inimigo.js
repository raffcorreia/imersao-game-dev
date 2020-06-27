

class Inimigo extends Animacao{
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, vrlocidade, delay) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

        this.x = width + delay;
        this.velocidade = vrlocidade;
        this.delay = delay;
    }

    move(){
        this.x = this.x - this.velocidade;

        if(this.x < -this.largura - this.delay){
            this.x = width;
        }
    }

}