class GameOver{
   constructor(imagem){
    this.imagem = imagem;
  }
  
  exibe(){
    image(this.imagem, windowWidth/4, windowHeight/2, 412, 78); 
  }
}