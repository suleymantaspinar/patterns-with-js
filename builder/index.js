const PersonBuilder = require('./lib/PersonBuilder');

// Employees
const sue = new PersonBuilder('Sue').makeEmployee().makeManager(60).build();
const bill = new PersonBuilder('Bill').makeEmployee().makePartTime().build();

// Shoppers
const charles = new PersonBuilder('Charles').withMoney(500).withList(['jeans, sunglasses']).build();
const tabitha = new PersonBuilder('Tabbitha').withMoney(1000).build();

console.log(sue.toString());
console.log(bill.toString());
console.log(charles.toString());
console.log(tabitha.toString());