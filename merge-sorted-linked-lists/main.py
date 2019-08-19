class ListNode:
	def __init__(self, x):
		self.val = x
		self.next = None


class Solution:
	def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
		currentL1 = l1
		currentL2 = l2

		result = ListNode(0)

		currentResult = result

		while currentL1 is not None or currentL2 is not None:
			if currentL2 is None or currentL1.val <= currentL2.val:
				currentResult.next = ListNode(currentL1.val)
				currentL1 = currentL1.next
			else:
				currentResult.next = ListNode(currentL2.val)
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
