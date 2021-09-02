/* Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false */

let word = 'renner';

function verificaPalindrome (x) {
    aux = x.split('').reverse().join('');
    if (x === aux) {
        return true;
    } else if (x != aux) {
        return false
    }
}

console.log(verificaPalindrome(word));
