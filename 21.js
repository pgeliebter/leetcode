/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

I can loop through both lists and then compare each node and push into new list
I can 'shift' the array so i don't need to keep track of iterators.
i need to keep track of the length of both lists to know when to stop

set new list blank
while  list1 length is not 0 or list 2 length is not 0 {
  compare the first two nodes
  if list one node is bigger{
    slice list one node and push into new list
    add one to list one iterator
  }
  if list two node is bigger {
    slice list two node and push into new list
    add one to list two iterator
  }
}
THIS IS FOR LINKED LISTS - DON'T KNOW. REAL ANSWER IS BELOW
*/

function mergeLists(list1, list2) {
  output = [];
  while (list1.length != 0 && list2.length != 0) {
    list1[0] > list2[0]
      ? output.push(list2.shift())
      : output.push(list1.shift());
  }
  list1.length == 0 ? output.push(list2.slice()) : output.push(list1.slice());
  return output.flat();
}

console.log(mergeLists([1, 6, 7], [4, 5, 6]));

function realMergedLists(l1, l2) {
  let list = new ListNode();
  let head = list;

  while (l1 !== null && l2 !== null) {
    // Select the smallest value from either linked list,
    // then increment that list forward.
    if (l1.val < l2.val) {
      list.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      list.next = new ListNode(l2.val);
      l2 = l2.next;
    }

    list = list.next;
  }

  // It's possible that one linked list is shorter than the other so we just
  // add on the remainder of the last linked list. It's already sorted :)
  if (l1 !== null) list.next = l1;
  if (l2 !== null) list.next = l2;

  // return .next because this first element in the linkedlist is empty
  return head.next;
}
