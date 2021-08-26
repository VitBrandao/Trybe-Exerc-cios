// Insira o salário
let salario = 9500;

// INSS
let inss;

if (salario > 0 && salario <= 1556.94) {
    inss = salario * 8 / 100;
} else if (salario > 1556.94 && salario <= 2594.92) {
    inss = salario * 9 / 100;
} else if (salario > 2594.92 && salario <= 5189.82) {
    inss = salario * 11 / 100;
} else if (salario > 5189.82){
    inss = 570.88;
}

// Desconto do INSS
salario = salario - inss;

// IR
let ir;

if (salario <= 1903.98) {
    ir = 0;
} else if (salario > 1903.98 && salario <= 2826.65) {
    ir = (salario * 7.5 / 100) - 142.80;
} else if (salario > 2826.65 && salario <= 3751.05) {
    ir = (salario * 15 / 100) - 354.80;
} else if (salario > 3751.05 && salario <= 4664.68) {
    ir = (salario * 22.5 / 100) - 636.13;
} else if (salario > 4664.68) {
    ir = (salario * 27.5 / 100) - 896.36;
}

// Desconto IR
salario = salario - ir;

// Resultado final
console.log(salario);

