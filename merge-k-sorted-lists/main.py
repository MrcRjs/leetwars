class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
    def __str__(self):
        return str(self.val)+ ' -> ' + str(self.next)



def removeNones(listWithNones):
    return list(filter(lambda x: x, listWithNones))

class Solution:
    def mergeKLists(self, lists: [ListNode]):
        res = None
        currentLists = removeNones(lists)
        resStart = None
        while len(currentLists) > 0:
            currentMinor = 0
            for i, c in enumerate(currentLists):
                currentMinor = i if currentLists[i].val < currentLists[currentMinor].val else currentMinor
            if res:
                res.next = ListNode(currentLists[currentMinor].val)
                res = res.next
            else:
                resStart = ListNode(currentLists[currentMinor].val)
                res = resStart

            if(currentLists[currentMinor].next):
                currentLists[currentMinor] = currentLists[currentMinor].next
            else:
                currentLists = currentLists[0:currentMinor] + currentLists[currentMinor + 1:]

        return resStart




if __name__ == '__main__':
    n1 = ListNode(2)
    n2 = ListNode(-1)
    n3 = ListNode(3)

    #n1.next = n2
    n2.next = n3

    l1 = [n1, None, n2]

    s1 = Solution().mergeKLists(l1)

    while (s1):
        print(s1.val)
        s1 = s1.next
