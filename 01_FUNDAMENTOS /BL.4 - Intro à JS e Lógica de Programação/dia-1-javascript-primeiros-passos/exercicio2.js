const num1 = 25;
const num2 = 18;

function maior (x,y) {
    if (num1 > num2) {
        return 'O maior número é o ' + num1;
    } else if (num2 > num1) {
        return 'O maior número é o ' + num2;
    }
}

console.log(maior(num1, num2));
