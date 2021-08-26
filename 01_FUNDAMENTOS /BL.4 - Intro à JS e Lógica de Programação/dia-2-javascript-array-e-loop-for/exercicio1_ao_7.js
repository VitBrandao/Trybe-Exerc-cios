let numbers = [5, 9, 3, 19, 7, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log()
console.log("Exercício 01");
for (let cont = 0; cont < numbers.length; cont += 1) {
    console.log(numbers[cont]);
}

console.log("______________");
// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
console.log("Exercício 02");
let soma = 0;

for (cont = 0; cont < numbers.length; cont += 1) {
    soma = soma + numbers[cont];
}

console.log("\nO resultado da soma dos elementos foi " + soma + ".\n");

console.log("______________");
// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
console.log("Exercício 03");

let media = soma / numbers.length;
console.log("\nA médica aritmética dos elementos é " + media + ".\n");

console.log("______________");
console.log("Exercício 04");
// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

if (media > 20) {
    console.log("A média é maior do que 20.");
} else if (media <= 20) {
    console.log("A média é menor ou igual a 20.");
}

// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
console.log("______________");
console.log("Exercício 05");

let maior = -1000;

for (cont = 0; cont < numbers.length; cont += 1){
    if (numbers[cont] > maior) {
        maior = numbers[cont];
    }
}

console.log("O maior número da lista é o " + maior + ".\n");

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
console.log("______________");
console.log("Exercício 06");

let cont_impar = 0;

for (cont = 0; cont < numbers.length; cont += 1) {
    if (numbers[cont] % 2 != 0) {
        cont_impar = cont_impar + 1;
    }
}

if (cont_impar > 0) {
    console.log("A quantidade de números ímpares da lista é " + cont_impar + ".\n");
} else if (cont_impar == 0){
    console.log("Nenhum valor ímpar encontrado!");
}


// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o
console.log("______________");
console.log("Exercício 06");

menor = 1000;
for (cont = 0; cont < numbers.length; cont += 1) {
    if (numbers[cont] < menor) {
        menor = numbers[cont];
    }
}

console.log("O menor número dentre os elementos é o " + menor);
