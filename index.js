const Person = require('./lib/Person');

// Employees
const sue = new Person('Sue', true, true, 60)
const bill = new Person('Bill', true, false, 20)

// Shoppers
const charles = new Person('Charles', false, false, 0, 500, ['jeans, sunglasses'])
const tabitha = new Person('Tabbitha', false, false, 0, 1000)

console.log(sue.toString())
console.log(bill.toString())
console.log(charles.toString())
console.log(tabitha.toString())
