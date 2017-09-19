'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j <= i - 1; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

function binary_search(search, array) {
  let startIndex = 0;
  let endIndex = array.length - 1;
  let midIndex = Math.floor((endIndex + startIndex) / 2);
  while (startIndex <= endIndex) {
    if (array[midIndex] === search)
      return midIndex;
    else {
      if (search < array[midIndex])
        endIndex = midIndex - 1;
      else
        startIndex = midIndex + 1;
      midIndex = Math.floor((endIndex + startIndex) / 2);
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(testArrayGenap);
console.log(testArrayGanjil);
// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
//
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
