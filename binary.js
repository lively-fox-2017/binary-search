'use strict'

let testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
let testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function merge(head, tail) {
	let result = [];
	let headIdx = 0;
	let tailIdx = 0;

	while (headIdx < head.length && tailIdx < tail.length) {
		if (head[headIdx] <= tail[tailIdx]) {
			result.push(head[headIdx]);
			headIdx += 1;
		} else {
			result.push(tail[tailIdx]);
			tailIdx += 1;
		}
	}

	// tambahkan sisanya kedalam array result
	if (head.length - headIdx > 0) {
		result.push(...head.splice(headIdx, head.length - headIdx));
	}
	if (tail.length - tailIdx > 0) {
		result.push(...tail.splice(tailIdx, tail.length - tailIdx));
	}

	return result;
}

function ownSort(arr) {
	// merge sort
	if (arr.length < 2) return arr;

	let medianIndex = Math.round(arr.length / 2);
	let head = arr.slice(0, medianIndex);
	let tail = arr.slice(medianIndex, arr.length);

	return merge(ownSort(head), ownSort(tail));
}

function binarySearch (search, array) {
	let low = 0;
	let high = array.length - 1;
	let mid = Math.round((high + low) / 2);

	while (low <= high) {
		if (search === array[mid]) return mid;
		if (search > array[mid]) {
			low = mid + 1;
			mid = Math.round((high + low) / 2);
		} else {
			high = mid - 1;
			mid = Math.round((high + low) / 2);
		}
	}

	return -1;
}

let arrayGenapSorted = ownSort(testArrayGenap)
let arrayGanjilSorted = ownSort(testArrayGanjil)

// test array
let test_array = [1, 2, 3, 4, 5];
console.log(binarySearch(3, test_array) === 2); // true

test_array = [13, 19, 24, 29, 32, 37, 43];
console.log(binarySearch(35, test_array) === -1); // true

test_array = [100, 120, 130, 135, 150, 170];
console.log(binarySearch(135, test_array) === 3); // true

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}
