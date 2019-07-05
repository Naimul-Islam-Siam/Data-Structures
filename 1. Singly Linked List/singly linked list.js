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

    push() {
        //create a new node whenever a value is pushed
        const newNode = new Node(val);

        //if there is no head, that means the list is empty, set the new node = head
        //and head and tail will be the same node
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            //otherwise if there is a head already, insert the new node to next to the tail.
            //update the new tail to new node
            this.tail.next = newNode;
            this.tail = newNode;
        }

        //increase the length of the list by one whenever something is pushed
        this.length++;

        //return the entire list
        return this;
    }
};