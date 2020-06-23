
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
    background(imagemCenario, 0, 0, width, height)
    image(imagemPersonagem, 0, height-135, 110, 135, 0, 0, 220, 270)
}