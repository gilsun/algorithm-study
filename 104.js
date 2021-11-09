// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

var maxDepth = function (root) {
  if (!root) return 0;
  let level = 0;
  let q = [root];
  while (q.length) {
    let size = q.length;
    while (size--) {
      let node = q.shift();
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    level++;
  }
  return level;
};

console.log(maxDepth([3, 9, 20, null, null, 15, 7]));
