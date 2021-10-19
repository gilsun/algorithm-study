// binary heap are used in priority queues, graph traversal algorithms

/* 
binary heap vs binary search tree 

left child index = 2n+1
right child index =2n+2

MaxBinaryHeap 
1) add the end 
2) bubble up (find the parent index is important )
 

*/

class GilsunMaxBinaryHeap {
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

let gilsunHeap = new GilsunMaxBinaryHeap();
gilsunHeap.insert(59);
console.log(gilsunHeap);
//[41,39,33,18,27,12,55]
///0   1  2  3 4  5  6
