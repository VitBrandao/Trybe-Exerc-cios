let num = 23;
let divisores = 0;

for (let cont = 2; cont < num; cont += 1) {
    if (num % cont === 0) {
        divisores += 1; 
    }
}

if (divisores > 0) {
    console.log("Não é primo!");
} else {
    console.log("É primo!");
}