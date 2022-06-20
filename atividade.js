/**
 * Tipos de variáveis
 * texto = "um texto"
 * numerico = 20
 * vetor = [10, 20, 30]
 * objeto = {}
 */

var aluno;

function setup(){
  createCanvas(600,200)
  
  aluno = {
    nome: 'Liz',
    idade: 13,
    peso: 58
  };

  console.log(aluno.nome);
  console.log(aluno.peso);
  console.log(aluno.idade);
  
  aluno.peso = 60;
  console.log(aluno.peso);
}

function draw(){
  background("black");
}
