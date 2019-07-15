//linked list implementation
class Item {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class Queue {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }

    enqueue(value) {
        const newItem = new Item(value);
        if (!this.top) {
            this.top = newItem;
            this.bottom = newItem;
        } else {
            this.bottom.next = newItem;
            this.bottom = newItem;
        }

        this.size++;

        return this.size;
    }

    dequeue() {
        if (this.size === 0) return undefined;

        let dequeuedItem = this.top;

        if (this.size === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = dequeuedItem.next;
        }

        this.size--;

        return dequeuedItem.value;
    }
};