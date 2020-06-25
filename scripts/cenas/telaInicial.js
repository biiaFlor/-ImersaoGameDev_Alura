class TelaInicial {
  constructor() {

  }

  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }

  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }

  _texto() {
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(50);
    text('As aventura de', width/2, height/4);
    textSize(75);
    text('Hipsta', width/2, height/4+50);
  }
  
  _botao(){
    botaoGerenciador.draw();
  }
}