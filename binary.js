'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  // Your sorting code
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let tampung = arr[i];
        arr[i] = arr[j];
        arr[j] = tampung;
      }
    }
  }
  return arr;
}

function binary_search (search, array) {
  // Your searching code
  let awal = 0;
  let akhir = array.length;

  while (awal <= akhir) {
    let tengah = Math.floor((awal + akhir) / 2);
    if (array[tengah] == search) {
      return tengah;
    } else if (array[tengah] < search) {
      awal = tengah + 1;
    } else if (array[tengah] > search) {
      akhir = tengah - 1;
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

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
