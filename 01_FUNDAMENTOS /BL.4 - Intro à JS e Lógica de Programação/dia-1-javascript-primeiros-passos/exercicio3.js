const num1 = 25;
const num2 = 181;
const num3 = 2;

function maiorDeTres (x, y, z) {
    if (num1 > num2 && num1 > num3) {
         return 'O maior é o ' + num1;
    } else if (num2 > num1 && num2 > num3) {
        return 'O maior é o ' + num2;
    } else {
        return 'O maior é o ' + num3;
    }
}

console.log(maiorDeTres(num1, num2, num3));