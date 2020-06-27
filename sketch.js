function setup() {
    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();

    personagem = new Personagem(matrizHipsta, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 100);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 30, 200, 200, 400, 400, 15, 100);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 100);
    // frameRate(40);

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);

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
    
    pontuacao.exibe();
    
    personagem.exibe();
    personagem.aplicaGravidade();
    
    const inimigo = inimigos[inimigoAtual];
    const inimigoSaiu = inimigo.x < -inimigo.largura

    inimigo.exibe();
    inimigo.move();
    
    if(inimigoSaiu) {
        pontuacao.adcionarPonto();

        inimigoAtual++;
        
        inimigo.limpa();

        if(inimigoAtual >= inimigos.length) {
            inimigoAtual = 0;
        }
        inimigo.velocidae = parseInt(random(10, 30));
        console.log(inimigo.velocidae);
    }

    if(personagem.estaColidindo(inimigo)){
        image(imagemGameOver, width/2 - 200, height/2);
        noLoop();
    }
}

function mouseClicked() {

    // console.log(personagem.estaColidindo({
    //     x: mouseX,
    //     y: mouseY,
    //     largura: 10,
    //     altura: 10
    // }));

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