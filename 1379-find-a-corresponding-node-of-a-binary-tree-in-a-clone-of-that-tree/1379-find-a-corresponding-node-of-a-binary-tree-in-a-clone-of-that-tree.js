/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    let queue_o = [original];
    let queue_c = [cloned];
    
    while(queue_o.length > 0){
        
        const dequeued_o = queue_o.shift();
        const dequeued_c = queue_c.shift();
        
        if(dequeued_o.val === target.val) return dequeued_c;
        
        
        
        dequeued_o?.left && queue_o.push(dequeued_o.left);        
        dequeued_o?.right && queue_o.push(dequeued_o.right);
        
        dequeued_c?.left && queue_c.push(dequeued_c.left);        
        dequeued_c?.right && queue_c.push(dequeued_c.right);

    }
};