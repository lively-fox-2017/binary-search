'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  for (var a = 1; a < arr.length; a++) {
    for (var b = 0; b < a - 1; b++) {
      if (arr[a] < arr[b]) {
        let simpan = arr[b];
        arr[b] = arr[a];
        arr[a] = simpan;
      }
    }
  }
  return arr;
}

function binary_search(search, array) {
  console.log(array.length);
  let mulaiIndex = 0;
  let highIndex = array.length - 1;
  let tengahIndex = Math.floor((mulaiIndex + highIndex) / 2);
  while (highIndex >= mulaiIndex) {
    if (array[tengahIndex] === search) {
      return tengahIndex;
    } else if (search < array[tengahIndex]) {
      highIndex = tengahIndex - 1;

    } else if (search > array[tengahIndex]) {
      mulaiIndex = tengahIndex + 1;
    }
    tengahIndex = Math.floor((mulaiIndex + highIndex) / 2);
  }
  return -1;
}

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
};