
class Jogo {
    constructor() {
        this.indice = 0
        this.mapa = fita.mapa
    }

    setup(){
        cenario = new Cenario(imagemCenario, 3)
        pontuacao = new Pontuacao()

        vida = new Vida(3, 3)

        personagem = new Personagem(
            matrizPersonagem,
            imagemPersonagem,
            0,
            30,
            110, 135,
            220, 270
        )
        const inimigo = new Inimigo(
            matrizInimigo, 
            imagemInimigo, 
            width - 50, 
            30,
            52, 52, 
            104, 104,
            10
        )
        const inimigoGrande = new Inimigo(
            matrizInimigoGrande,
            imagemInimigoGrande,
            width - 56, 
            0,
            200, 200, 
            400, 400,
            8
        )
        const inimigoVoador = new Inimigo(
            matrizInimigoVoador,
            imagemInimigoVoador,
            width - 90,
            110,
            100, 75,
            200, 150,
            9
        )

        inimigos.push(inimigo)
        inimigos.push(inimigoGrande)
        inimigos.push(inimigoVoador)

    }


    keyPressed(key) {
        if (key == 'ArrowUp') {
            personagem.pular()
            somDoPulo.play()
        }
    }

    draw() {
        cenario.exibir()
        cenario.movimentar()

        pontuacao.exibir()
        pontuacao.adicionarPonto()

        vida.draw()

        personagem.exibir()
        personagem.aplicarGravidade()

        const linhaAtual = this.mapa[this.indice]

        const inimigo = inimigos[linhaAtual.inimigo]
        const inimigoVisivel = inimigo.x < -inimigo.largura
        
        personagem.precisao = linhaAtual.precisao
        inimigo.velocidade = linhaAtual.velocidade

        inimigo.exibir()
        inimigo.movimentar()

        if (inimigoVisivel) {
            this.indice++
            inimigo.aparecer()
            if (this.indice > (this.mapa.length -1)) {
                this.indice = 0
            }
        }

        if (personagem.verificarColisao(inimigo)) {
            
            vida.perderVida()
            personagem.atualizarAcabouDeColidir()

            if (vida.vidas == 0) {
                personagem.acabouDeColidir = true
                image(imagemGameOver, width/2-200, height/2)
                noLoop()
            }
        }
    }
}