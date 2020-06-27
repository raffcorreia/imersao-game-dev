class TelaInicial {
    constructor() {

    }

    draw() {
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }
    
    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {
        textFont(fonteTelaIncial);
        textAlign(CENTER);
        textSize(50);
        text('As aventuras de', width / 2, height / 2);
        textSize(100);
        text('Hipsta', width / 2, height / 2 + 100);
    }

    _botao() {
        botaoGerenciador.draw();
    }
}