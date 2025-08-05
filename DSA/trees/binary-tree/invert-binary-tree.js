class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  invertTree(root) {
    if (root === null) return null;
    const left = root.left;
    const right = root.right;

    root.left = right;
    root.right = left;

    this.invertTree(root.left);
    this.invertTree(root.right);

    return root;
  }
}
