// Ability of a function to remember its lexical scope

// const myModule = (() => {
//     const person = {
//         name: 'Bhavdeep',
//         age: 23,
//         savings: 200,
//     }

//     function incrementSavings(amount) {
//         return person.savings += amount;
//     }

//     return {
//         incrementSavings,
//         getName: function() {
//             return person.name
//         },
//         getAge: function() {
//             return person.age
//         },
//         getSavings: function() {
//             return person.savings
//         }
//     }
// })()

// const personSavings = module1.getSavings()
// console.log(personSavings)
// console.log(person.getSavings())

const arr = [1, 2, 3, 4]
for(const i of arr){
    setTimeout(() => {
        console.log(i)
    }, 1000)
}