const angulo1 = 60;
const angulo2 = 100;
const angulo3 = -20;

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log("Há um ângulo inválido.")
}

let soma = angulo1 + angulo2 + angulo3;

if (soma == 180) {
    console.log("é um triângulo!");
} else {
    console.log("não é um triângulo.");
}