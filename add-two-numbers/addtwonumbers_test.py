import unittest
from addtwonumbers import Solution, ListNode

class TestNumbers(unittest.TestCase):
    def test_simple(self):
        l1 = ListNode(1)
        self.assertEqual(Solution.listNodeToNum(l1), 1)

    def test_simple123(self):
        l1 = ListNode(1)
        l2 = ListNode(2)
        l3 = ListNode(3)
        l1.next = l2
        l2.next = l3
        self.assertEqual(Solution.listNodeToNum(l1), 321)

    def test_sumLists(self):
        l0 = ListNode(0)
        l1 = ListNode(2)
        l2 = ListNode(2)
        l3 = ListNode(2)

        # 0 -> 2 -> None | int 20
        l0.next = l1

        # 2 -> 2 -> None | int 22
        l2.next = l3

        sum = Solution.listNodeToNum(Solution.addTwoNumbers(l0, l2))

        self.assertEqual(sum, 42)

    def test_numToListNode(self):
        self.assertEqual(Solution.numToListNode(34).__str__(), "4 -> 3 -> None")

if __name__ == '__main__':
    unittest.main()
