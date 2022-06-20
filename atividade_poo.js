/**
 * Tipos de variáveis
 * texto = "um texto"
 * numerico = 20
 * vetor = [10, 20, 30]
 * objeto = {}
 */

var box1, box2;

function setup(){
  createCanvas(600,200)
  
  box1 = new Box(200, 50, 50, 50, 5);
  box2 = new Box(100, 60, 60, 60, 9); 

}

function draw(){
  background("black");
  box1.show();
  box1.move();

  box2.show();
  box2.move();
}
