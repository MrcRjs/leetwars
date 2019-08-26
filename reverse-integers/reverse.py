class Solution:
    @staticmethod
    def reverse(x: int) -> int:
        b32 = (2 ** 31)

        if (b32 * -1) <= x <= b32:
            print(x)
            if x > 0:
                numStr = str(x)
                return int(numStr[::-1])
            else:
                numStr = str(x * -1)
                numStr = numStr[::-1]

                return int(numStr) * -1
        return 0
