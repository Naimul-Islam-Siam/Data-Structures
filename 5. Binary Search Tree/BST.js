//Binary Search Tree

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode; //if the tree is empty
        } else {
            let currentNode = this.root; //for checking and traversing

            while (true) {
                if (value === currentNode.value) return undefined; //avoid and ignore duplication of value

                if (value < currentNode.value) {
                    if (currentNode.left === null) {
                        currentNode.left = newNode;

                        return this;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if (value > currentNode.value) {
                    if (currentNode.right === null) {
                        currentNode.right = newNode;

                        return this;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }
};

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(16);