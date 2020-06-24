
let imagemCenario
let imagemPersonagem
let imagemInimigo

let cenario
let personagem
let inimigo
let somDoJogo
let somDoPulo

const matrizInimigo = [
    [0, 0],
    [104, 0],
    [208, 0],
    [312, 0],
    [0, 104],
    [104, 104],
    [208, 104],
    [312, 104],
    [0, 208],
    [104, 208],
    [208, 208],
    [312, 208],
    [0, 312],
    [104, 312],
    [208, 312],
    [312, 312],
    [0, 418],
    [104, 418],
    [208, 418],
    [312, 418],
    [0, 522],
    [104, 522],
    [208, 522],
    [312, 522],
    [0, 626],
    [104, 626],
    [208, 626],
    [312, 626],
]

const matrizPersonagem = [
    [0, 0],
    [220, 0],
    [440, 0],
    [660, 0],
    [0, 270],
    [220, 270],
    [440, 270],
    [660, 270],
    [0, 540],
    [220, 540],
    [440, 540],
    [660, 540],
    [0, 810],
    [220, 810],
    [440, 810],
    [660, 810],
]


function preload() {
    imagemCenario = loadImage('https://raw.githubusercontent.com/ValeriaNiceria/imersaoGameDev/master/assets/img/cenario/floresta.png')
    imagemPersonagem = loadImage('https://raw.githubusercontent.com/ValeriaNiceria/imersaoGameDev/master/assets/img/personagem/correndo.png')
    imagemInimigo = loadImage('https://raw.githubusercontent.com/ValeriaNiceria/imersaoGameDev/master/assets/img/inimigos/gotinha.png')
    somDoJogo = loadSound('https://raw.githubusercontent.com/ValeriaNiceria/imersaoGameDev/master/assets/music/trilha_jogo.mp3')
    somDoPulo = loadSound('https://raw.githubusercontent.com/ValeriaNiceria/imersaoGameDev/master/assets/music/somPulo.mp3')
    // imagemCenario = loadImage('assets/img/cenario/floresta.png')
    // imagemPersonagem = loadImage('assets/img/personagem/correndo.png')
    // imagemInimigo = loadImage('assets/img/inimigos/gotinha.png')
    // somDoJogo = loadSound('assets/music/trilha_jogo.mp3')
    // somDoPulo = loadSound('assets/music/somPulo.mp3')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    cenario = new Cenario(imagemCenario, 3)
    personagem = new Personagem(
        matrizPersonagem,
        imagemPersonagem,
        0,
        110, 135,
        220, 270
    )
    inimigo = new Inimigo(
        matrizInimigo, 
        imagemInimigo, 
        width - 50, 
        52, 52, 
        104, 104
    )
    frameRate(40)
    somDoJogo.loop()
}

function keyPressed() {
    if (key == 'ArrowUp') {
        personagem.pular()
        somDoPulo.play()
    }
}

function draw() {
    cenario.exibir()
    cenario.movimentar()

    personagem.exibir()
    personagem.aplicarGravidade()

    inimigo.exibir()
    inimigo.movimentar()

    if (personagem.verificarColisao(inimigo)) {
        console.log('Colidiu!')
        noLoop()
    }
}
