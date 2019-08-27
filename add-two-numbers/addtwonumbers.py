class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
    def __str__(self):
        return str(self.val)+ ' -> ' + str(self.next)

class Solution:
    @staticmethod
    def addTwoNumbers(l1: ListNode, l2: ListNode) -> ListNode:
        return ListNode(3)

    @staticmethod
    def listNodeToNum(ln: ListNode) -> int:
        # Node power 10 ^ 0 = 1 * currentNode.val | 10 ^ 1 = 10 * currentNode.val...
        nodePower = 0
        result = 0

        # Count Nodes
        while ln:
            result += ln.val * pow(10, nodePower)
            nodePower += 1
            ln = ln.next
        return result
