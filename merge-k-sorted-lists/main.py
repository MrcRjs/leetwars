class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def mergeKLists(self, lists: [ListNode]):
        res = None
        idx = 0
        while res == None and len(lists) < idx:
            res = lists[0]
            idx += 1

        for lN in lists[idx:]:
            if lN:
                res = self.mergeTwoLists(res, lN)
        return res

    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:

        result = ListNode(l1.val if l1.val <= l2.val else l2.val)

        currentResult = result

        while l1 or l2:
            if not l2 or (l1 and l1.val <= l2.val):
                currentResult.next = ListNode(l1.val)
                l1 = l1.next
            else:
                currentResult.next = ListNode(l2.val)
                l2 = l2.next
            currentResult = currentResult.next

        return result.next


if __name__ == '__main__':
    n1 = ListNode(2)
    n2 = ListNode(-1)
    # n3 = ListNode(3)

    #n1.next = n2
    #n2.next = n3

    l1 = [n1, None, n2]

    s1 = Solution().mergeKLists(l1)

    n = s1
    while n:
        print(n.val)
        n = n.next
