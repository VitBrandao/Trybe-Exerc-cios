// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let array = [2, 4, 6, 7, 10, 0, -3];

let maior = -1000;

function maiorArray (x) {
    for (let index in array) {
        if (array[index] > maior) {
            maior =  array[index];
        }
    }

    return 'O maior número dessa lista é o ' + maior;
}

console.log(maiorArray(array));