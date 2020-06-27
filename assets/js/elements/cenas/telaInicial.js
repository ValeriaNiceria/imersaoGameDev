
class TelaInicial {
    constructor() {
        this.x = width / 2;
        this.y = height
    }

    draw() {
        this._imagemDeFundo()
        this._texto()
        this._botao()
    }

    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height)
    }

    _texto() {
        textFont(fonteTelaInicial)
        textAlign(CENTER)
        textSize(50)
        text('As aventuras da', this.x, this.y  / 3)
        textSize(130)
        text('Hipsta', this.x, this.y / 2)
    }

    _botao() {
        botao.y = height / 7 * 5
        botao.draw()
    }
}