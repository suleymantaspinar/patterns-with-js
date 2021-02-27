class InventoryItem {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    print() {
        console.log(`${item.name} costs ${item.price}`)
    }

}

class GoldenInventoryItem {

    constructor(baseItem) {
        this.name = baseItem.name;
        this.price = 1000 + baseItem.price;
    }
}

class DiamondInventoryItem {

    constructor(baseItem) {
        this.name = baseItem.name;
        this.price = 1000 + baseItem.price;
        this.cutsGlass = true;
    }

    print() {
        console.log(`${item.name} - ${item.price}`);
    };
}

module.exports = { InventoryItem, GoldenInventoryItem, DiamondInventoryItem};