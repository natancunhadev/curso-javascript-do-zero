/* Desafio 05: Funções - Verificar Primo
Crie função isPrimo que retorna true se primo. Teste 7(true), 10(false).
Output: true,false
curso javascriptdozero! */

// LACUNA: Defina função isPrimo(n) { ... lógica de primo simples }
function isPrimo(n) {
  // PREENCHA: for 2 to sqrt(n), check divisores
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrimo(7), isPrimo(10));

// Natan de Souza Cunha - Software Engineering 2026
