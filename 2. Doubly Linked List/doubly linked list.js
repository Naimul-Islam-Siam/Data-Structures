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

    pop() {
        if (!this.head) return undefined;

        let poppedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }

        this.length--;

        return poppedNode;
    }

    shift() {
        if (this.length === 0) return undefined;

        let shiftedNode = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftedNode.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }

        this.length--;

        return shiftedNode;
    }

    unshift(val) {
        const newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return newNode;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        let currentNode, counter;

        if (index <= this.length / 2) {
            currentNode = this.head;
            counter = 0;

            while (counter !== index) {
                currentNode = currentNode.next;
                counter++
            }
        }

        if (index > this.length / 2) {
            currentNode = this.tail;
            counter = this.length - 1;

            while (counter !== index) {
                currentNode = currentNode.prev;
                counter--;
            }
        }

        return currentNode;
    }

    set(index, val) {
        const foundNode = this.get(index);

        if (foundNode) {
            foundNode.val = val;
            return true;
        } else return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        const newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let targetNode = this.get(index);
        let beforeNode = targetNode.prev;
        let afterNode = targetNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        targetNode.next = null;
        targetNode.prev = null;

        this.length--;

        return this;
    }
};