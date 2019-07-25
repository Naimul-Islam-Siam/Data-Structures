class PriorityQueue {
    constructor() {
        this.heapElements = [];
    }

    print() {
        console.log(this);
    }

    enqueue(value, priority) {
        const newNode = new Node(value, priority);

        this.heapElements.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heapElements.length - 1;
        let currentElement = this.heapElements[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heapElements[parentIndex];

            if (currentElement.priority < parent.priority) {
                this.heapElements[parentIndex] = currentElement;
                this.heapElements[index] = parent;
                index = parentIndex;
            } else break;
        }
    }

    dequeue() {
        let min = this.heapElements[0];
        let tail = this.heapElements.pop();

        if (this.heapElements.length > 0) {
            this.heapElements[0] = tail;
            this.bubbleDown();
        }

        return min;
    }

    bubbleDown() {
        let currentIndex = 0;
        let currentElement = this.heapElements[currentIndex];

        while (true) {
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 * currentIndex + 2;
            let leftChild, rightChild;
            let swappedIndex = null;

            if (leftChildIndex < this.heapElements.length) {
                leftChild = this.heapElements[leftChildIndex];

                if (leftChild.priority < currentElement.priority) {
                    swappedIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < this.heapElements.length) {
                rightChild = this.heapElements[rightChildIndex];

                if (
                    (swappedIndex === null && rightChild.priority < currentElement.priority) ||
                    (swappedIndex !== null && rightChild.priority < leftChild.priority)
                ) {
                    swappedIndex = rightChildIndex;
                }
            }

            if (swappedIndex === null) break;

            this.heapElements[currentIndex] = this.heapElements[swappedIndex];
            this.heapElements[swappedIndex] = currentElement;
            currentIndex = swappedIndex;
        }
    }
};

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}