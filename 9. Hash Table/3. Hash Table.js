class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    // does the hashing work
    hash(key) {
        let total = 0, weirdPrime = 31, index;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            total = total * weirdPrime + (key.charCodeAt(i) - 96);
        }
        index = total % this.keyMap.length;

        return index;
    }

    // insert a key along with its value and put it in the right place in keyMap
    set(key, value) {
        let index;
        index = this.hash(key);

        // separate chaining: if multiple keys have the same index they will be all stored inside that index
        // in the keyMap if that index is not yet occupied by any key, create an empty array on that index (nested array)
        // then push
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    // passing the key as argument find its value
    get(key) {
        let index;
        index = this.hash(key);

        // if that index is not empty
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) //[0] represents the key as its in the 0th index
                    return this.keyMap[index][i][1]; //[1] represents the value of that key as its in the 1st index
            }
        }

        //if that index is empty
        if (!this.keyMap[index])
            return undefined;
    }
};