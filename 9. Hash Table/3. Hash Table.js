class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    hash(key) {
        let total = 0, weirdPrime = 31, index;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            total = total * weirdPrime + (key.charCodeAt(i) - 96);
        }
        index = total % this.keyMap.length;

        return index;
    }

    // insert a key and put it in the right place in keyMap
    set(key) {
        let index;
        index = this.hash(key);

        // separate chaining: if multiple keys have the same index they will be all stored inside that index
        // in the keyMap if that index is not yet occupied by any key, create an empty array on that index (nested array)
        // then push
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push(key);
    }
};