import { ListNode, LinkedList } from "../linkedlist.js";

// reverse order of a linked list
let node1 = new ListNode(10);
let node2 = new ListNode(20);
node1.next = node2;
let list = new LinkedList(node1);
console.log(list);

let reverse = list.reverse();
console.log(reverse);