function setup() {
    createCanvas(windowWidth, windowHeight);
    // frameRate(40);

    jogo = new Jogo();
    jogo.setup();

    telaInicial = new TelaInicial();

    cenas = {
        jogo,
        telaInicial
    };

    botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2 + 150);
}

function keyPressed(){
    jogo.keyPressed(key);
}

function draw() {
    cenas[cenaAtual].draw();

    // if(cenaAtual === 'jogo'){
    //     jogo.draw();
    // }
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