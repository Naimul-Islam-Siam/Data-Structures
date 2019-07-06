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

    //get the value of a specific index
    get(index) {
        let current = this.head;
        let counter = 0;

        if (!this.head || index < 0 || index >= this.length)
            return undefined;

        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    //update the value of a node of a particular index
    set(index, val) {
        const foundNode = this.get(index);

        if (foundNode) {
            foundNode.val = val;
            return true;
        }

        return false;
    }

    //insert a node
    insert(index, val) {
        const newNode = new Node(val);

        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val); // !! will convert it to boolean
        if (index === this.length) return !!this.push(val);

        let prev = this.get(index - 1);
        let temp = prev.next;

        prev.next = newNode;
        newNode.next = temp;
        this.length++;

        return true;
    }

    //remove a node
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift;
        if (index === this.length - 1) return this.pop();

        let prevNode = this.get(index - 1);
        let targetNode = prevNode.next;
        prevNode.next = targetNode.next;
        this.length--;

        return targetNode;
    }
};