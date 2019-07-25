class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    print() {
        console.log(this);
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        let currentElement = this.values[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if (currentElement > parent) {
                this.values[parentIndex] = currentElement;
                this.values[index] = parent; //swap
                index = parentIndex;
            } else break;
        }
    }

    extractMax() {
        let max = this.values[0];
        let tail = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = tail;
            this.bubbleDown();
        }

        return max;
    }

    bubbleDown() {
        let index = 0;
        let currentElement = this.values[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swappedIndex = null;

            if (leftChildIndex < this.values.length) {
                leftChild = this.values[leftChildIndex];

                if (leftChild > currentElement) {
                    leftChildIndex = swappedIndex;
                }
            }

            if (rightChildIndex < this.values.length) {
                rightChild = this.values[rightChildIndex];

                if (
                    (swappedIndex === null && rightChild > currentElement) ||
                    (swappedIndex !== null && rightChild > leftChild)
                ) {
                    swappedIndex = rightChildIndex;
                }
            }

            if (swappedIndex === null) break;

            this.values[index] = this.values[swappedIndex];
            this.values[swappedIndex] = currentElement;
            index = swappedIndex;
        }
    }
};

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.print();