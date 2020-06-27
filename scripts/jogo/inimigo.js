

class Inimigo extends Animacao{
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, vrlocidade, delay) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

        this.velocidade = vrlocidade;
        this.delay = delay;
        
        this.limpa();
    }

    move(){
        this.x = this.x - this.velocidade;

        if(this.x < -this.largura - this.delay){
            this.x = width;
        }
    }

    limpa(){
        this.x = width + this.delay;
    }
}