const scout_prototype = require('./lib/scout_prototype');

const alex = scout_prototype.clone();
alex.name = 'Alex';
alex.addItemToTheList('slingshot');

const eve = scout_prototype.clone();
eve.name = 'Eve'
eve.addItemToTheList('reading light');

console.log(`${alex.name}: ${alex.shoppingList}`);
console.log(`${eve.name}: ${eve.shoppingList}`);
