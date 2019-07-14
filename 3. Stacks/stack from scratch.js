//Linked list implementation

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);

        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let currentFirst = this.first;
            this.first = newNode;
            this.first.next = currentFirst;
        }

        this.size++;
        return this.size;
    }

    pop() {
        if (this.size === 0) return undefined;

        let currentFirst = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
            this.size--;
        } else {
            this.first = currentFirst.next;
            this.size--;
        }

        return currentFirst.value;
    }
};