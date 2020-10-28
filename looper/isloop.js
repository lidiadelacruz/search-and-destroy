'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  console.log('linkedlist', linkedlist)
  let map = new Map()


  let current = linkedlist.head
  console.log('pointer', current)
  while (current.next) {
    if (map.has(current.value)) {
      console.log('map has the value')
      return true
    } else {
      console.log('setting the value', current.value, map)
      map.set(current.value, 1)
    }
    current = current.next
  }

  return false

};
// Map.prototype.has(key)
// Map.prototype.set(key, value)
/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
