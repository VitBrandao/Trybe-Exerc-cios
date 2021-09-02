// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

let maior = 'a';

function maiorString (x) {
    for (let index in array) {
        if (array[index].lenght > maior.lenght) {
            maior = array[index];
        }
    }

    return 'A maior string da lista é ' + maior;
}

console.log(maiorString(array));