
let imagemCenario
let imagemPersonagem
let cenario
let personagem
let somDoJogo

function preload() {
    // imagemCenario = loadImage('https://raw.githubusercontent.com/ValeriaNiceria/imersaoGameDev/master/assets/img/cenario/floresta.png')
    // imagemPersonagem = loadImage('https://raw.githubusercontent.com/ValeriaNiceria/imersaoGameDev/master/assets/img/personagem/correndo.png')
    // somDoJogo = loadSound('https://raw.githubusercontent.com/ValeriaNiceria/imersaoGameDev/master/assets/music/trilha_jogo.mp3')
    imagemCenario = loadImage('assets/img/cenario/floresta.png')
    imagemPersonagem = loadImage('assets/img/personagem/correndo.png')
    somDoJogo = loadSound('assets/music/trilha_jogo.mp3')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    cenario = new Cenario(imagemCenario, 3)
    personagem = new Personagem(imagemPersonagem)
    frameRate(40)
    somDoJogo.loop()
}

function draw() {
    cenario.exibir()
    cenario.movimentar()
    personagem.exibir()
}
