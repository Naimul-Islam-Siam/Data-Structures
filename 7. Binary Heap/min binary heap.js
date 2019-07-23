class MinBinaryHeap {
    constructor() {
        this.heapElements = [3, 5, 9, 6, 8, 20, 10, 12, 18, 9];
    }

    insert(element) {
        this.heapElements.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heapElements.length - 1;
        let element = this.heapElements[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heapElements[parentIndex];

            if (element < parent) {
                this.heapElements[parentIndex] = element;
                this.heapElements[index] = parent;
                index = parentIndex;
            } else break;
        }
    }

    print() {
        console.log(this);
    }
};

let heap = new MinBinaryHeap();
heap.insert(1);
heap.print();