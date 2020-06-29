function preload() {
    imagemCenario = loadImage('imagens/cenario/floresta.png')
    imagemTelaInicial = loadImage('imagens/assets/telaInicial.png')
    imagemGameOver = loadImage('imagens/assets/game-over.png')
    imagemVida = loadImage('imagens/assets/coracao.png')
    imagemPersonagem = loadImage('imagens/personagem/correndo.png')
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png')
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png')
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png')
    somDoJogo = new loadSound('sons/trilha_jogo.mp3');
    fonteTelaIncial = loadFont('imagens/assets/fonteTelaInicial.otf');
    fita = loadJSON('fita/fita.json');
}