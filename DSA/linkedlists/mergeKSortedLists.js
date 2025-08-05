function merge(l1, l2) {
  let dummy = new ListNode(null);
  const head = dummy;

  let cur1 = l1;
  let cur2 = l2;

  while (cur1 !== null && cur2 !== null) {
    let next;
    if (cur1.val < cur2.val) {
      next = new ListNode(cur1.val);
      cur1 = cur1.next;
    } else {
      next = new ListNode(cur2.val);
      cur2 = cur2.next;
    }

    dummy.next = next;
    dummy = dummy.next;
  }

  if (cur1 !== null) {
    dummy.next = cur1;
  }

  if (cur2 !== null) {
    dummy.next = cur2;
  }

  return head.next;
}

function mergeKLists(lists) {
  if (lists.length === 0) return null;

  let l1 = lists[0];

  for (let i = 1; i < lists.length; i++) {
    let l2 = lists[i];
    l1 = this.merge(l1, l2);
  }

  return l1;
}


class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}



const l1 = new ListNode(1)
l1.next = new ListNode(2)

const l2 = new ListNode(1)
l2.next = new ListNode(2)

const sol = new Solution()

console.log(JSON.stringify(sol.mergeKLists([l1, l2])));


