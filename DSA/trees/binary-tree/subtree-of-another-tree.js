/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */

    isSameTree(t1, t2) {
        if (!t1 && !t2) return true;

        if (t1 && !t2) return false;

        if (!t1 && t2) return false;

        if (t1.val !== t2.val) return false;

        const left = this.isSameTree(t1.left, t2.left);
        const right = this.isSameTree(t1.right, t2.right);

        return left && right;

    }


    isSubtree(root, subRoot) {
        if (!subRoot) return true;

        if (!root) return false;

        if (this.isSameTree(root, subRoot)) {
            return true;
        }

        const left = this.isSubtree(root.left, subRoot);
        const right = this.isSubtree(root.right, subRoot);

        return left || right;

    }
}
