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

    find(value) {
        if (this.root === null) return undefined;

        let currentNode = this.root;
        let found = false;

        while (currentNode && !found) {
            //while something is there to search for and desired value != found
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                found = true;
                console.log(`Yes, found ${value} !!!`);
                return true;
            }
        }

        if (found === false) {
            console.log(`Sorry couldn't find ${value} !`);
            return false;
        }
    }

    DFSpreOrder() {
        let visitedNodes = [];
        let currentNode = this.root;

        function traverse(node) {
            visitedNodes.push(node.value);

            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(currentNode);

        return visitedNodes;
    }

    DFSpostOrder() {
        let visitedNodes = [];
        let currentNode = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);

            visitedNodes.push(node.value);
        }

        traverse(currentNode);

        return visitedNodes;
    }

    DFSinOrder() {
        let visitedNodes = [];
        let currentNode = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            visitedNodes.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(currentNode);

        return visitedNodes;
    }
};

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.insert(13);

console.log(`Pre-Order: ${tree.DFSpreOrder()}`);
console.log(`Post-Order: ${tree.DFSpostOrder()}`);
console.log(`In-Order: ${tree.DFSinOrder()}`);