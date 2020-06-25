
class Personagem extends Animacao {

    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

        this.chao = height - this.altura - this.variacaoY
        this.y = this.chao

        this.velocidadeDoPulo = 0
        this.gravidade = 3
        this.alturaDoPulo = -30
        this.pulos = 0
    }

    pular() {
        if (this.pulos < 2) {
            this.velocidadeDoPulo = this.alturaDoPulo
            this.pulos++
        }
    }
    
    aplicarGravidade() {
        this.y += this.velocidadeDoPulo
        this.velocidadeDoPulo += this.gravidade

        if (this.y > this.chao) {
            this.y = this.chao
            this.pulos = 0
        }
    }

    verificarColisao(inimigo) {
        const precisao = .6
        const colisao = collideRectRect(
            this.x, this.y,
            this.largura * precisao, 
            this.altura * precisao,
            inimigo.x, inimigo.y,
            inimigo.largura * precisao, 
            inimigo.altura * precisao
        )

        return colisao 
    }
}