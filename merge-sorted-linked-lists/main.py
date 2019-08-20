class ListNode:
	def __init__(self, x):
		self.val = x
		self.next = None


class Solution:
	def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
		if l1 and l2 is not None
		if l2.val < l1.val:
			temp: ListNode = l1
			l1 = l2
			l2 = temp

		start = l1

		while l1.next is not None:
			while l1.next is not None and l1.next.val <= l2.val:
				l1 = l1.next

			if l1.next is None and l2 is not None:
				l1.next = l2
				break
			temp = l1.next
			l1.next = l2
			l1 = l1.next
			l2 = temp

		return start


if __name__ == '__main__':
	n1 = ListNode(1)
	n2 = ListNode(2)
	n3 = ListNode(3)

	n1.next = n2
	n2.next = n3

	n4 = ListNode(1)
	n5 = ListNode(2)
	n6 = ListNode(3)

	n4.next = n5
	n5.next = n6

	s1 = Solution().mergeTwoLists(n1, n4)

	node = s1
	while node is not None:
		print(node.val)
		node = node.next
