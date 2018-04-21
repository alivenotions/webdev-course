// ES5 way of doing things
// function printTail(arr) {
//     const tail = [];
//     for(let i = 1; i < arr.length; i++) {
//         tail.push(arr[i]); // ToDo: push, pop, shift, unshift
//     }
//     return tail;
// }

// ES6
const printTail = ([head, ...tail]) => tail
const printHead = ([head]) => head

const arr = [1, 2, 3, 4, 5];
console.log(printHead(arr))

const newNumbers = [44, 33, 22];
// const newArray = arr;
const newArray = [...arr, ...newNumbers, 22, 44, 33]

// es5 way of doing things
// for(let i = 0; i < newNumbers.length; i++) {
//     newArray.push(newNumbers[i])
// }
arr
newArray