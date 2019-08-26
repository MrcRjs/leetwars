class Solution:
    @staticmethod
    def reverse(x: int) -> int:

        if is32Bits(x):
            res = 0
            if x > 0:
                numStr = str(x)
                res = int(numStr[::-1])
            else:
                numStr = str(x * -1)
                numStr = numStr[::-1]

                res = int(numStr) * -1
            if is32Bits(res):
                return res
        return 0


def is32Bits(x):
    b32 = (2 ** 31)
    return -b32 <= x < b32
