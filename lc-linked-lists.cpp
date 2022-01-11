// https://leetcode.com/problems/remove-linked-list-elements/
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
    ListNode* removeElements(ListNode* head, int val) {
        
        
        // #1 Head is equal to val
        // Remove Head: head gets assigned head.next
        while(head && head->val == val) {
            head = head->next;
        }
        
        if(head) {
            // #2 Next is equal to val
            ListNode* current = head;
            while(current && current->next) {
                if(current->next->val == val) {
                    current->next = current->next->next;
                } else {
                    current = current->next;
                }
            }
        }
        
        return head;        
    }
};
