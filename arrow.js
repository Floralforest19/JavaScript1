const sayHi = () => alert('Hi')

const isEven = val => val % 2 === 0
console.log(isEven(10))

const sum = (a, b) => a + b
console.log(sum(1, 2))

const filterRange = (arr, a, b) => arr.filter(item => a <= item && item <= b)

console.log(filterRange(arr, 1, 4))
