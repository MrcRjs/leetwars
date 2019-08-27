import unittest
from addtwonumbers import Solution, ListNode

class TestNumbers(unittest.TestCase):
    def test_simple(self):
        l1 = ListNode(1)
        self.assertEqual(Solution.listNodeToNum(l1), 1)


if __name__ == '__main__':
    unittest.main()
