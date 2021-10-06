/* TESTE 1

const sayHello = () => {
  return ('hello trybers');
}
const printGreeting = (callback) => {
    console.log(callback());
}
printGreeting(sayHello);


TESTE 2
const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }
  
  const initialSum = sumFixAmount(15)
  console.log(initialSum(5)); 

TESTE 3  
  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, console.log);

  TESTE 4
  const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(4, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});
*/

// Atividade Prática 01

const wakeUp = () => 'Acordando';
const coffeeTime = () => 'Bora tomar café';
const sleepTime = () => 'Partiu dormir';

const doingThings = (func) => console.log(func());

doingThings(wakeUp);
doingThings(coffeeTime);
doingThings(sleepTime);