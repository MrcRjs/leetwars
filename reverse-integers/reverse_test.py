import unittest
from reverse import Solution

b32 = (2 ** 31)


class ReverseTest(unittest.TestCase):
    def test_32bitsPos(self):
        self.assertEqual(Solution.reverse(b32 + 1), 0)

    def test_32bitsNeg(self):
        self.assertEqual(Solution.reverse((b32 * -1) - 1), 0)

    def test_32bitsLimPost(self):
        self.assertEqual(8463847412, Solution.reverse(b32))

    def test_32bitsLimNeg(self):
        self.assertEqual(-8463847412, Solution.reverse(b32 * -1))

    def test_positive(self):
        self.assertEqual(321, Solution.reverse(123))

    def test_negative(self):
        self.assertEqual(-321, Solution.reverse(-123))


if __name__ == '__main__':
    unittest.main()
