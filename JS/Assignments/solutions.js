function greetUser(user) {
    return `Hello ${user}`
}

const divide = (num, den) => den === 0 
        ? 'error, cannot divide by 0' 
        : num / den


function isVowel (char) {
    return /[aieou]/.test(char)
}

function factorial(num) { // 24
    num // 4*3*2
    if(num === 1) return;
    return num * factorial(num - 1);
}

function reverseString(str) {
    return str.split('').reverse().join('')
    // return str.split('')
    //         .reduce((reverseString, char) => char + reverseString, '')
}

const isPalindrome = str => str === reverseString(str) ? true : false

console.log(reverseString('hello'))
// const oldArr = [1, 2, 3]
// oldArr
// const arr = oldArr.map(element => element * 2)
// const odd = oldArr.filter(element => element % 2 !== 0)
// const sum = oldArr.reduce((accum, num) => num + accum, 0)
// oldArr
// odd
// arr
// sum


// console.log(divide(1, 2))
// console.log(isVowel('a'))
// console.log(factorial(4))



