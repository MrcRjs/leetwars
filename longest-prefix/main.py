from typing import List


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:

        if len(strs) == 0:
            return ""

        if len(strs) == 1:
            return strs[0]

        for w in strs:
            if len(w) == 0:
                return ""

        letterColumn = 0
        len0 = len(strs[0])
        while letterColumn < len0:
            currentChar = strs[0][letterColumn]
            for w in strs:
                if letterColumn >= len(w) or w[letterColumn] != currentChar:
                    return strs[0][0:letterColumn]
            letterColumn += 1

        return strs[0]

if __name__ == '__main__':
    s = Solution()

    print(s.longestCommonPrefix(['cat','caterpillar', 'carrier']))