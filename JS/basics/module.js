const person = {
    name: 'Bhavdeep',
    age: 23,
    savings: 200,
}

const incrementSavings = (amount) => person.savings += amount

const getName = () => person.name
function getSavings() {
    return person.savings
}
module.exports = { incrementSavings, getName, getSavings }