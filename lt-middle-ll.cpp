/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
  ListNode *middleNode(ListNode *head) {
    int n = 1;
    ListNode *it = head;
    while (it->next) {
      it = it->next;
      n++;
      // std::cout << n << std::endl;
    }

    it = head;
    for (int i = 0; i < n / 2; i++) {
      it = it->next;
    }
    return it;
  }
};
