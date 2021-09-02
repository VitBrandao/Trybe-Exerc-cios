//  Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let array = [2, 4, 6, 7, 10, 0, -3];

let menor = 1000;

function menorArray (x) {
    for (let index in array) {
        if (array[index] < menor) {
            menor =  array[index];
        }
    }

    return 'O menor número dessa lista é o ' + menor;
}

console.log(menorArray(array));