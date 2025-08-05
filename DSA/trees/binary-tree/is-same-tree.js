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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (!p && q) return false; 

        if (!q && p) return false;

        if (!q && !p) return true; 
        
        if (p.val !== q.val) return false;

        const left = this.isSameTree(p.left, q.left);
        const right = this.isSameTree(p.right, q.right);

        return left && right;
    }
}
