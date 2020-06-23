
let imagemCenario
let imagemPersonagem

function preload() {
    imagemCenario = loadImage('assets/img/cenario/floresta.png')
    imagemPersonagem = loadImage('assets/img/personagem/correndo.png')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    background(imagemCenario)
    image(imagemPersonagem, 0, 200, 110, 135, 0, 0, 220, 270)
}