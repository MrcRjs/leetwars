class ListNode:
	def __init__(self, x):
		self.val = x
		self.next = None


class Solution:
	def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:

		result = ListNode(0)

		currentResult = result

		while l1 is not None or l2 is not None:
			if l2 is None or (l1 is not None and l1.val <= l2.val):
				currentResult.next = ListNode(l1.val)
				l1 = l1.next
			else:
				currentResult.next = ListNode(l2.val)
				l2 = l2.next
			currentResult = currentResult.next

		return result.next


if __name__ == '__main__':
	n1 = ListNode(1)
	n2 = ListNode(2)
	n3 = ListNode(3)

	n1.next = n2
	n2.next = n3

	s1 = Solution().mergeTwoLists(n1, n1)

	node = s1
	while node is not None:
		print(node.val)
		node = node.next
