const Shopper = require('./lib/Shopper');
const { InventoryItem, 
        GoldenInventoryItem,
        DiamondInventoryItem
} = require('./lib/InventoryItem');

const alex = new Shopper('Alex', 100);

const walkman = new InventoryItem('Walkman', 29.99);
const necklace = new InventoryItem('Necklace', 9.99);

const gold_necklace = new GoldenInventoryItem(necklace);
const diamond_necklace = new DiamondInventoryItem(gold_necklace);

const diamond_walkman = new DiamondInventoryItem(walkman);

alex.purchase(necklace);
alex.purchase(walkman);

alex.purchase(diamond_necklace)
alex.purchase(diamond_walkman)

