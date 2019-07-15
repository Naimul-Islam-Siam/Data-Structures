//Linked list implementation

class Item {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }

    push(value) {
        const newItem = new Item(value);

        if (this.size === 0) {
            this.top = newItem;
            this.bottom = newItem;
        } else {
            let currentTop = this.top;
            this.top = newItem;
            this.top.next = currentTop;
        }

        this.size++;
        return this.size;
    }

    pop() {
        if (this.size === 0) return undefined;

        let currentTop = this.top;
        if (this.size === 1) {
            this.top = null;
            this.bottom = null;
            this.size--;
        } else {
            this.top = currentTop.next;
            this.size--;
        }

        return currentTop.value;
    }
};