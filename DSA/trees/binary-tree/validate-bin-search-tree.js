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
 * @return {boolean}
 */
function isValid(root, min, max) {
    if (!root) return true;

    if (root.val <= min || root.val >= max) return false;

    const left = isValid(root.left, min, root.val);
    const right = isValid(root.right, root.val, max );

    return left && right;
}

var isValidBST = function(root) {

    return isValid(root, -Infinity, Infinity);

};