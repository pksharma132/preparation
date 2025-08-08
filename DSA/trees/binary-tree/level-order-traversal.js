/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {

    if (!root) return [];
    const queue = [root];
    const res = [];

    

    while (queue.length) {
        const levelL = queue.length;
        const level = [];

        for (let i = 0; i < levelL; i++) {
            const cur = queue.shift();
            level.push(cur.val);

            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }

        res.push(level);

    }

    return res;
    
};