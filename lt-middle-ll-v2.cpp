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
    ListNode *middle = head;
    ListNode *current = head;
    while (current != NULL && current->next != NULL) {
      middle = middle->next;
      current = current->next->next;
    }

    return middle;
  }
};
