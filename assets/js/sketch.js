
let imagemCenario;

function preload() {
    imagemCenario = loadImage('../img/cenario/floresta.png')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    background(imagemCenario);
}