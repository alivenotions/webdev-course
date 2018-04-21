const call = function() {
    console.log(this.sound)
}
const pokemon = {
    name: 'Pikachu',
    type: 'Electric',
    sound: 'Pika-pi',
    call
}
pokemon.call()
const blabber = pokemon.call.bind(pokemon)
blabber()
// const anotherPokemon = {
//     name: 'Bulbasaur',
//     sound: 'bulba-bulba'
// }
// anotherPokemon.call = pokemon.call
// anotherPokemon.call()

console.log(pokemon.type)
for(const key in pokemon) {
    key
    console.log(pokemon[key])
}
function talk() {
    console.log(this.sound)
}
const animal = {
    talk,
    sound: 'woooooo'
}
const dog = {
    sound: 'Wohoo'
}

const prarieDog = {
    howl: function() {
        console.log(this.sound.toUpperCase())
    }
}
Object.setPrototypeOf(dog, animal)
dog.talk()
Object.setPrototypeOf(prarieDog, dog)
prarieDog.howl()

/** new keyword */
// class Person {
//     constructor(saying) {
//         this.saying = saying
//     }
//     talk() {
//         console.log(`I say ${this.saying}`)
//     }
// }

// constructor function
function Person(saying){
    this.saying = saying
}

Person.prototype.talk = function() {
    console.log(`I say ${this.saying}`)
}

// 1. new creates a new object(normal empty object)
// 2. sets the prototype of Person to the newly created object
// 3. calls the constructor function with the new object assigned to 'this'
// 4. returns the new object
const bd = new Person('Hi')
const mrunmai = new Person('bye')
bd.talk()
mrunmai.talk()

bd
console.log(bd.__proto__)

class Mammal {
    constructor(sound) {
        this.sound = sound
    }
    
    talk() {
        console.log(this.sound)
    }
}

class Dog extends Mammal {
    constructor(sound){
        super(sound)
    }
}

let fluffykins = new Dog('woof')
fluffykins.talk()
let chotu = Dog.prototype.talk.bind({
    sound: 'KAMEHAMEHA!!!'
})()
