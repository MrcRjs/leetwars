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


if __name__ == '__main__':
    unittest.main()
