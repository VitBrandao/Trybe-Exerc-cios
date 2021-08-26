let array = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

let aux;
let rounds = array.length - 1;

for (let k = 1; k < rounds; k += 1){
    for (let cont = 0; cont < array.length; cont += 1) {
        if (array[cont] > array[cont + 1]) { 
            aux = array[cont];
            array[cont] = array[cont + 1];
            array[cont + 1] = aux;
        }
}
}

for (cont = 0; cont < array.length; cont += 1) {
    console.log(array[cont]);
}