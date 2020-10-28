'use strict';

// Complete this algo
const binarySearch = (array, target, begin = 0, end = array.length) => {

	let halfIndex = begin + Math.floor((end - begin) / 2.0)
	let half = array[halfIndex]
	if (end < begin) {
		return false
	}
	if (half === target) {
		return true
	} else if (half < target) {
		return binarySearch(array, target, halfIndex + 1, end)
	} else {
		return binarySearch(array, target, begin, halfIndex - 1)
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
