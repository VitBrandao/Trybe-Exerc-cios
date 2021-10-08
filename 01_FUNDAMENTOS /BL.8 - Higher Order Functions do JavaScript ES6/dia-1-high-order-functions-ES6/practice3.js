const object = {
    name: 'Jackson',
    lastName: 'Pires',

    greet: function(personName, callback) {
        const jackGreeting = callback(personName);
        return jackGreeting;
    }

}

const loveGreeting = (name) => {
    return (`Olá, ${name}. Muito bom ver você!`)
}

// console.log(object.greet('Vitor', loveGreeting));

const hateGreeting = (name) => {
    return (`Oi, ${name}`);
}

// console.log(object.greet('Mario', hateGreeting));