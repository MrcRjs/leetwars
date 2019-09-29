class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if needle == "":
            return 0

        nl = len(needle)
        for i in range(0, len(haystack) - nl + 1):
            if haystack[i : nl + i] == needle:
                return i
        return -1

if __name__ == '__main__':
    s = Solution()
    print(s.strStr("llxdrte","xd"))