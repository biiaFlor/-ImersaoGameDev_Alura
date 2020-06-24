class Persongem extends Animacao{
   constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
     
     this.variacaoY = variacaoY;
     this.yInicial = height - this.altura - this.variacaoY;
     this.y = this.yInicial;
     this.gravidade = 6;
     this.velocidadePulo = 0;
     this.alturaPulo = -50;
     this.quantidadePulos = 0;
  }
  
  pula(){
    if(this.quantidadePulos < 2){
      this.velocidadePulo = this.alturaPulo;
      this.quantidadePulos++;
    }
  }
  
  aplicaGravidade(){
    this.y= this.y + this.velocidadePulo;
    this.velocidadePulo = this.velocidadePulo + this.gravidade;
    
    if(this.y>this.yInicial){
       this.y = this.yInicial;
      this.quantidadePulos=0;
    }
  }
  colidindo(inimigo){
    const precisao = .7;
    const colisao = collideRectRect(
      this.x,
      this.y, 
      this.largura* precisao, 
      this.altura*precisao,
      inimigo.x,
      inimigo.y, 
      inimigo.largura*precisao, 
      inimigo.altura*precisao
    );
    
    return colisao;
  }
}