'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {

  for (let i = 1; i < arr.length; i++) {

    for (let j = 0; j < i - 1; j++) {

      if (arr[i] < arr[j]) {

        // Temporary variable to store arr[i] (for swapping purposes ^^)
        let temp = arr[i];

        arr[i] = arr[j];
        arr[j] = temp;

      }

    }

  }

  return arr;

}

function binary_search (search, array) {

  let start = 0;
  let stop = array.length - 1;

  let mid;

  while (start <= stop) {

    mid = Math.floor((start + stop) / 2);

    // If found
    if (array[mid] === search) {
      return mid;

    } else if (array[mid] < search ) {

      start = mid + 1;

    } else {

      stop = mid - 1;

    }

  }

  // If not found
  return -1;

}

/**
 *
 * Release 0 tests
 *
 */

// let test_array = [1, 2, 3, 4, 5];
// console.log(binary_search(3, test_array) === 2); // true

// test_array = [13, 19, 24, 29, 32, 37, 43];
// console.log(binary_search(35, test_array) === -1); // true

// test_array = [100, 120, 130, 135, 150, 170];
// console.log(binary_search(135, test_array) === 3); // true

/**
 *
 * Release 1 tests
 *
 */

var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
