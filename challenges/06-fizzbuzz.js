/* Desafio 06: FizzBuzz
De 1 a 20: múltiplo 3='Fizz', 5='Buzz', ambos='FizzBuzz'. Output linha por linha.
Ex: 1,2,Fizz,4,Buzz,...
curso javascriptdozero! */

for (let i = 1; i <= 20; i++) {
  // LACUNA: if/else para lógica FizzBuzz ou i
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// Natan de Souza Cunha - Software Engineering 2026
