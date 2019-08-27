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
    def listNodeToNum(ln: ListNode):
        return 1