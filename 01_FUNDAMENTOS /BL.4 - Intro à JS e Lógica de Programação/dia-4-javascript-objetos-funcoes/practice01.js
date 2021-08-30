let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
};

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' possui ' + player.age + ' anos de idade.');

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('Ela foi eleita a melhor jogadora de futebol do mundo nos anos: ' + player['bestInTheWorld']);

console.log('E ainda ganhou ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata nas Olimpíadas.');