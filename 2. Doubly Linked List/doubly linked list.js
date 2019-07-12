class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
};

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    print() {
        let list = [];
        let current = this.head;

        while (current) {
            list.push(current.val);
            current = current.next;
        }
        console.log(list);
    }

    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
};