class ColtMaxBinaryHeap {
  constructor() {
    this.values = [42, 12, 2, 8, 16];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

let coltHeap = new ColtMaxBinaryHeap();

coltHeap.insert(49);
coltHeap.insert(25);
coltHeap.insert(69);
console.log(coltHeap);
