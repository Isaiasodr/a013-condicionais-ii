const num = Number(prompt("digite um número?"));

if (num % 2 === 0 || num % 3 === 0) {
  console.log("acertou");
} else {
  console.log("este número não é divisível por 2 ou 3");
}
