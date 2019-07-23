class MinBinaryHeap {
    constructor() {
        this.heapElements = [];
    }

    insert(element) {
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