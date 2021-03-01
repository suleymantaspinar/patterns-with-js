class Storage {

    constructor(name, inventory = [], deliveryTime = 0) {
        this.name = name;
        this.inventory = inventory;
        this.deliveryTime = deliveryTime;

        this.next = null;
    }

    lookInLocalInventory(itemName) {
        let index = this.inventory.map(item => itemName).indexOf(itemName);
        return this.inventory[ index ];
    }

    setNext(storage) {
        this.next = storage
    }

    find(itemName) {
        let found = this.lookInLocalInventory(itemName)

        if(found) {
            return {
                name: found.name,
                qty: found.qty,
                location: this.name,
                deliveryTime: (this.deliveryTime === 0) ? 'now' : `${this.deliveryTime} days`
            }
        } else if(this.next) {
            this.next.find(itemName)
        } else {
            return `We don't carry this ${itemName}`
        }

    }
}

module.exports = Storage;