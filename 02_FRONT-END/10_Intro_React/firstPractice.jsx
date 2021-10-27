// Para fixar, crie um elemento JSX que recebe o valor "Hello, JSX" de uma constante chamada textJSX , e o incorpore em uma tag h1 .

const textJSX = 'Hello JSX';
const classJSX = 'classe-inicial'; // extra: para sintetizar conhecimento

const elementJSX = <h1 className = {classJSX}> {textJSX} </h1>;

console.log(elementJSX); // não roda no VS: 'code language not supported or defined'