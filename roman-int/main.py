class Solution:
    def romanToInt(self, s: str) -> int:
        RV = {
            "M": 1000,
            "D": 500,
            "C": 100,
            "L": 50,
            "X": 10,
            "V": 5,
            "I": 1,
        }

        sum = 0
        i = 0

        while i < len(s):
            if  i + 1 < len(s) and RV[s[i]] < RV[s[i + 1]]:
                sum -= RV[s[i]]
                sum += RV[s[i + 1]]
                i += 2
            else:
                sum += RV[s[i]]
                i += 1
        return sum

if __name__ == '__main__':
    s = Solution()

    roman = "MCDXLVIII"

    print(s.romanToInt(roman))