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
var evaluateNode = function(node){
    if(node.val === 0 || node.val === 1) return node.val;
    
    if(node.val === 2)
        return evaluateNode(node.left) || evaluateNode(node.right);
    
    if(node.val === 3)
        return evaluateNode(node.left) && evaluateNode(node.right);
}

var evaluateTree = function(root) {
    return evaluateNode(root);
};

/*
0 - false
1 - true
2 - OR
3 - AND
*/