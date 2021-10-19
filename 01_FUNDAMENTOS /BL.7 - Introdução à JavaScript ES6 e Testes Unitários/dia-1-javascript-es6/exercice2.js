// faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderArray = array => { for(let index = 0; index < array.length; index += 1) {
    let aux = 0;
    if (array[index] > array[index + 1]) {
        aux = array[index+1];
        array[index+1] = array[index];
        array[index] = aux;
    } 
}
}

orderArray(oddsAndEvens); // será necessário alterar essa linha 😉
console.log(oddsAndEvens);
