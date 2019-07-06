//node stores a piece of data -> val
//node stores reference to next node -> next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //insert at the end
    push(val) {
        //create a new node whenever a value is pushed
        const newNode = new Node(val);

        //if there is no head, that means the list is empty, set the new node = head
        //and head and tail will be the same node
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            //otherwise if there is a head already, insert the new node to next to the tail.
            //set the new node to new tail
            this.tail.next = newNode;
            this.tail = newNode;
        }

        //increase the length of the list by one whenever something is pushed
        this.length++;

        //return the entire list
        return this;
    }

    //remove from the end
    pop() {
        if (!this.head)
            return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    //remove from the start
    shift() {
        if (!this.head)
            return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if (this.head === this.length) {
            this.tail = null;
        }

        return currentHead;
    }

    //insert at the start
    unshift(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;

        return this;
    }
}