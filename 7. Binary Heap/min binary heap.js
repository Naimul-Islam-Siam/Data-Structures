class MinBinaryHeap {
    constructor() {
        this.heapElements = [];
    }

    print() {
        console.log(this);
    }

    insert(element) {
        this.heapElements.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heapElements.length - 1;
        let currentElement = this.heapElements[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heapElements[parentIndex];

            if (currentElement < parent) {
                this.heapElements[parentIndex] = currentElement;
                this.heapElements[index] = parent;
                index = parentIndex;
            } else break;
        }
    }

    extractMin() {
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

                if (leftChild < currentElement) {
                    swappedIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < this.heapElements.length) {
                rightChild = this.heapElements[rightChildIndex];

                if (
                    (swappedIndex === null && rightChild < currentElement) ||
                    (swappedIndex !== null && rightChild < leftChild)
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

let heap = new MinBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.print();