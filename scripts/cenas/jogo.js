class Jogo {
    constructor(){
        this.inimigoAtual = 0;
        
        this.mapa = fita.mapa;
    }

    setup() {
        cenario = new Cenario(imagemCenario, 3);
        pontuacao = new Pontuacao();

        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidainicial);
    
        personagem = new Personagem(matrizHipsta, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 30, 200, 200, 400, 400, 15);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);
    
        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);
    
        console.log('Setup');
    }

    keyPressed(key){
        if(key === 'ArrowUp') {
            personagem.pula();
        }
    }

    draw() {
        cenario.exibe();
        cenario.move();
        
        pontuacao.exibe();

        vida.draw();;
        
        personagem.exibe();
        personagem.aplicaGravidade();
        
        const linhaAtual = this.mapa[this.inimigoAtual];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoSaiu = inimigo.x < -inimigo.largura
        
        inimigo.velocidade = linhaAtual.velocidade;
        inimigo.exibe();
        inimigo.move();
        
        if(inimigoSaiu) {
            pontuacao.adcionarPonto();
    
            this.inimigoAtual++;
            
            inimigo.aparece();
    
            if(this.inimigoAtual >= this.mapa.length) {
                this.inimigoAtual = 0;
            }
        }
    
        if(personagem.estaColidindo(inimigo)){
            vida.perdeVida();
            personagem.tornaIncencivel();
            // image(imagemGameOver, width/2 - 200, height/2);
            // noLoop();
        }
    }
}