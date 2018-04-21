// Factory Function 
// const add = function(adder) {
//     return function(number) {
//         return number + adder;
//     }
// }

// const addTwo = add(2);
// addTwo
// const addTen = add(10);

// console.log(addTen(24));

const pokemonType = type => 
                        sound => 
                            name => 
                                console.log(`My name is ${name} and I am a ${type} type and I go ${sound}`)

const electricPokemon = pokemonType('electric')
electricPokemon('pika-pi')('pikachu')