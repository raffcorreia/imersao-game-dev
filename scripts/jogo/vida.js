class Vida {
    constructor(total, vidasInicial) {
        this.total = total;
        this.vidasInicial = vidasInicial;
        this.vidas = this.vidasInicial;

        this.largura = 25;
        this.altura = 25;

        this.xPadding = 20;
        this.yPadding = 20;
    }

    draw(){
        for(let i = 0; i < this.vidas; i++) {
            const posicao = (this.xPadding + this.largura) * i
            
            image(imagemVida, posicao + this.xPadding, this.yPadding, this.largura, this.altura);
        }
    }

    ganhaVida(){
        if(this.vidas <= this.total) {
            this.vidas++;
        }
    }

    perdeVida(){
        this.vidas--;
        if(this.vidas <= 0) {
            image(imagemGameOver, width/2 - 200, height/2);
            setTimeout(() => {
                image(imagemGameOver, width/2 - 200, height/2);
                noLoop();
            }, 100);
        }
    }
}