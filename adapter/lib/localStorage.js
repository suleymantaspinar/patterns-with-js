const { writeFile, existsSync, readFileSync, unlink } = require('fs');

class LocalStorage {

    constructor() {
        if(existsSync('localStorage.json')) {
            console.log(`Loading items from localStorage.json`);
            const txt = readFileSync('localStorage.json')
            this.items = JSON.parse(txt);
        } else {
            this.items = {}
        }
    }

    setItem(key, value) {
        this.items[ key ] = value;
        writeFile('localStorage.json', JSON.stringify(this.items), err => {
            if(err) console.error(err)
        })
    }

    getItem(key) {
        return this.items[ key ];
    }

    clear() {
        this.items = {};
        unlink('localStorage.json', () => {
            console.log("localStorage removed")
        })
    }

    get length() {
        return Object.keys(this.items).length
    }
}

module.exports = new LocalStorage();