const CatalogItem = require('./lib/CatalogItem');
const CatalogGroup = require('./lib/CatalogGroup');

const boots = new CatalogItem("Leather Boots", 79.99);
const sneakers = new CatalogItem("Kicks", 39.99);
const flipFlops = new CatalogItem("California wook boots", 19.99);

const group_shoes = new CatalogGroup("Shoes and Such", [boots, sneakers, flipFlops])

const group_foods = new CatalogGroup("Foods for while you try on clothes", [
    new CatalogItem("Milkshake", 5.99),
    new CatalogItem("French Fries", 3.99)
]);

const keychain = new CatalogItem("Key Chain", .99);

// console.log(`boots total: $${boots.total}`);

// boots.print();
// sneakers.print();
// group_shoes.print();

const catalog = new CatalogGroup("Clothes and Foods", [keychain, group_foods, group_shoes])

console.log(`$${catalog.total}`)
catalog.print()
