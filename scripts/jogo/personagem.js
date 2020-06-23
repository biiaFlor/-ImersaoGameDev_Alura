class Persongem extends Animacao{
   constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)
     
     this.yInicial = height - this.altura;
     this.y = this.yInicial;
     this.gravidade = 3;
     this.velocidadePulo = 0;
  }
  
  pula(){
    this.velocidadePulo = -30;
  }
  
  aplicaGravidade(){
    this.y= this.y + this.velocidadePulo;
    this.velocidadePulo = this.velocidadePulo + this.gravidade;
    
    if(this.y>this.yInicial){
       this.y = this.yInicial;
    }
  }
}