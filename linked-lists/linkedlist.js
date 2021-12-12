// Linked lists are linear data structures similar to an raat.
// Unlike array - elements not stored in particular memory location/index
// Each element (node) has a value & address (link) that references the node in list.
// The first node (head) of linked list | last node (tail) points to null.
// If list is empty - head is a null reference.

/** Time Complexity
 * Look up Index - O(n)
 * Look up by Value - O(n)
 * Insert at Beginning/End- O(1)
 * Insert in the Middle - O(n)
 * Delete at Beginning - O(1)
 * Delete at End - O(n)
 * Delete in the Middle - O(n)
*/

export class ListNode{
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  // addFirst
  addFirst(item){
    let node = new ListNode(item, this.head);
    this.head = node;
  }
  // deleteFirst
  deleteFirst(){
    if(this.head === null){
      throw new Error('Empty list - nothing to delete');
    } else {
      let second = this.head.next;
      this.head.next = null;
      this.head = second;
    }
  }
  // addLast
  addLast(item){
    let node = new ListNode(item);
    if(this.head == null){
      this.head = node;
    } else {
      let lastNode = this.head;
      if(lastNode){
        while(lastNode.next){
          lastNode = lastNode.next
        } 
      }
      lastNode.next = node;
    }
  }
  // deleteLast
  deleteLast(){
    if(this.head === null){
      throw new Error('Empty list - nothing to delete');
    } else {
      let lastNode = this.head;
      if(lastNode){
        while(lastNode.next){
          lastNode = lastNode.next
        } 
      }
      var previous = lastNode;

    }
  }
  getPrevious(node){
    let current = this.head;
    while(current.next != null){
      if(current.next == node) return current;
      current = current.next;
    }
    return null;
  }
  // contains
  contains(item){
    let current = this.head;
    while(current.next != null){
      if(current.next.value === item){
        // console.log(true);
        return true;
      }
      current = current.next;
    }
    // console.log(false);
    return false;
  }
  // indexOf
  indexOf(item){
    let index = 0;
    let current = this.head;
    while(current.next != null){
      if(current.next.value === item){
        // console.log(index);
        return index;
      }
      current = current.next;
      index++;
    }
    // console.log(-1);
    return -1;
  }
  // clear
  clear(){
    this.head = null;
  }
  // size
  size(){
    let count = 0;
    let node = this.head;
    while(node){
      count++;
      node = node.next;
    }
    // console.log(count);
    return count;
  }
  // toArray
  toArray(){
    let array = [];
    let current = this.head;
    let index = 0;
    while(current != null){
      array[index++] = current.value;
      current = current.next;
    }
    // console.log(array);
    return array;
  }
  // reverse order
  reverse(){
    let current = this.head.next;
    let previous = this.head;
    // [10, 20, 30]
    //  p   c   n
    while(current != null){
      var next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    return current = previous;

    // while(current != null){
    //   // save next before we overwrite node.next!
    //   tmp = current.next;
    //   // reverse pointer
    //   current.next = previous;
    //   // step forward in the list
    //   previous = current;
    //   current = tmp;
    // }
    // return previous;
  }
}

