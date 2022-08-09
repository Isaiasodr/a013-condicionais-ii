//código a ser reescrito

/* if (nome === "José") {
  console.log("Oi, Zé!");
} else {
  console.log("Olá, " + nome);
}

if (idade >= 18) {
  console.log("pode tirar carteira de motorista!");
} else {
  console.log("Ainda não pode tirar carteira de motorista");
} */

let idade = Number(prompt("qual a sua idade"));
let nome = prompt("qual seu nome?");

nome === "José" ? console.log("Oi zé!") : console.log(`Olá,${nome}`);

idade >= 18
  ? console.log("você pode tirar carteira!")
  : console.log("você pode não tirar carteira!");
