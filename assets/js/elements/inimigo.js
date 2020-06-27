
class Inimigo extends Animacao {

    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

        this.velocidade = velocidade
        this.x = width
    }


    movimentar() {
        this.x = this.x - this.velocidade
    }

    aparecer() {
        this.x = width
    }
}