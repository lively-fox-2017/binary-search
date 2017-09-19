'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  var tampung;
  for(var i = 1; i < arr.length; i++) {
    for(var j = 0; j < i; j++) {
      if(arr[i] < arr[j]) {
        tampung = arr[i]
        arr[i] = arr[j]
        arr[j] = tampung
      }
    }
  }
  return arr
}

function binary_search(search, array) {
  // Your searching code
  var atas = array.length;
  var bawah = 0;
  var tengah
  while(atas >= bawah) {
    var tengah = Math.ceil((atas + bawah) / 2);

    if(array[tengah] == search) {
      return tengah
    }
    else if(search > array[tengah]) {
      bawah = tengah + 1
    }
    else if(search < array[tengah]) {
      atas = tengah - 1
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
