
class Personagem extends Animacao {

    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, precisao) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

        this.chao = height - this.altura - this.variacaoY
        this.y = this.chao

        this.velocidadeDoPulo = 0
        this.gravidade = 4
        this.alturaDoPulo = -42
        this.pulos = 0
        this.acabouDeColidir = false

        this.precisao = precisao

        this.passos = 60
        this.posicaoInicial = this.x
    }

    atualizarAcabouDeColidir() {
        this.acabouDeColidir = true
        setTimeout(() => {
            this.acabouDeColidir = false
        }, 1000)
    }

    pular() {
        if (this.pulos < 2) {
            this.velocidadeDoPulo = this.alturaDoPulo
            this.pulos++
        }
    }

    ir() {
        this.x = this.x + this.passos
    }
    
    voltar() {
        this.x = this.x - this.passos
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

        if (this.acabouDeColidir) {
            return false
        } else {
            const precisao = this.precisao
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
}