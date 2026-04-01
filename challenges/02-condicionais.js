/* Desafio 02: Condicionais - Par ou Ímpar
Classifique os números [1,2,3,4] como 'par' ou 'impar'. Output: impar,par,impar,par
curso javascriptdozero! */

const numbers = [1, 2, 3, 4];
const resultados = [];

for (let num of numbers) {
  // LACUNA: Use if/else para push 'par' ou 'impar'
  if (num % 2 == 0) {
    resultados.push('par');
  } else {
    resultados.push('impar');
  }
}

console.log(resultados.join(','));

// Natan de Souza Cunha - Software Engineering 2026
