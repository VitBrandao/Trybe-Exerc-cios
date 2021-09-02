let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  // 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 

  console.log("Boas-vindas, " + info.personagem);

  // 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

  info['recorrente'] = 'Sim';
  console.log(info.recorrente);

  // 3 - Faça um for/in que mostre todas as chaves do objeto.

  for (let index in info) {
      console.log(index);
  }

  // 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

  for (index in info) {
    console.log(info[index]);
}

// 5 -Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let object = {
    personagem: 'Tio Patinhas',
    origem: 'O último MacPatinhas',
    nota: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    recorrente: 'Sim'
}

for (let value in object) {
    console.log(value, object[value]);
}