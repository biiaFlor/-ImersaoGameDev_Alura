class Inimigo extends Animacao{
   constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay)
     
     this.delay = delay;
     this.velocidade = velocidade;
     this.x = width + this.delay;
    }
  
  move(){
    this.x = this.x-this.velocidade;
    
    if(this.x < -this.largura){
       this.x = width;
    }
  }
  
}