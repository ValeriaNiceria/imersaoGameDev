
class Jogo {
    constructor() {
        this.inimigoAtual = 0
    }

    setup(){
        cenario = new Cenario(imagemCenario, 3)
        pontuacao = new Pontuacao()

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
            10,
            50
        )
        const inimigoGrande = new Inimigo(
            matrizInimigoGrande,
            imagemInimigoGrande,
            width - 56, 
            0,
            200, 200, 
            400, 400,
            8,
            50
        )
        const inimigoVoador = new Inimigo(
            matrizInimigoVoador,
            imagemInimigoVoador,
            width - 90,
            110,
            100,
            75,
            200,
            150,
            9,
            50
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


        personagem.exibir()
        personagem.aplicarGravidade()

        const inimigo = inimigos[this.inimigoAtual]
        const inimigoVisivel = inimigo.x < -inimigo.largura

        inimigo.exibir()
        inimigo.movimentar()

        if (inimigoVisivel) {
            this.inimigoAtual++
            if (this.inimigoAtual > 2) {
                this.inimigoAtual = 0
            }
            inimigo.velocidade = parseInt(random(10, 22))
        }

        if (personagem.verificarColisao(inimigo)) {
            image(imagemGameOver, width/2-200, height/2)
            console.log('Colidiu!')
            noLoop()
        }
    }
}