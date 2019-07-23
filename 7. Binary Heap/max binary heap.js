class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12]; //pre-added elements
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        let element = this.values[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if (element > parent) {
                this.values[parentIndex] = element;
                this.values[index] = parent; //swap
                index = parentIndex;
            } else break;
        }
    }

    print() {
        console.log(this);
    }
};

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.print();