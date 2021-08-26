// Declare valores de custo e venda
const custo = 1;
const venda = 4;

// Se digitar valor negativo, dá erro.
if (custo < 0 || venda < 0){
    console.log("ERRO!");
}

// Foram mil vendas
const custoMil = custo * 1000;
const vendaMil = venda * 1000;

// Imposto de 20% sobre o valor de custo
const imposto = custo * 20 / 100;
const custoImposto = custoMil + imposto;

// Cálculo final do lucro 
lucro = vendaMil - custoImposto;
console.log(lucro);


