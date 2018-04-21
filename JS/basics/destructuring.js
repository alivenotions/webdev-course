// Array destructuring
const fiveNumbers = [1, 2, 3, 4, 5]

const addDoubledArray = ([first, ...rest]) => { 
    if(first === undefined) return 0
    return 2*first + addDoubledArray(rest)
}

const addDoubledArray2 = (fiveNumbers) => {
    if(fiveNumbers[0] === undefined) return 0
    return 2*fiveNumbers[0] + addDoubledArray2(fiveNumbers.splice(1,))
}

console.log(addDoubledArray2(fiveNumbers))

// Object destructuring
const person = {
    name: 'bhavdeep',
    age: 22,
}

const {name, age} = person
name
age
