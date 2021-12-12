import { ListNode, LinkedList } from "../linkedlist.js";

// test linkedlist functions
let node1 = new ListNode(1);
let node2 = new ListNode(2);
node1.next = node2;
let list = new LinkedList(node1);

try{
  list.addFirst(0);
  list.addLast(3);
  list.indexOf(3);
  list.contains(1);
  list.deleteFirst();
  list.deleteLast();
  list.size();
  // list.clear();
  // list.toArray();
} catch(err){
  console.error(err);
}
  
console.log(list);

