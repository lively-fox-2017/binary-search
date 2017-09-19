'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i =0; i < arr.length; i++){
    for(var j = 0; j<i; j++){
      if(arr[j] > arr[i]){
        var tampung = arr[i];
        arr[i] = arr[j];
        arr[j] = tampung;
      }
    }
  }
  return arr
}

function binarySearch (search, array) {
  // Your searching code
  var lo = 0;
  var hi = array.length-1;
  var middle = 0;

  while(lo<=hi){
    middle = Math.floor(lo+(hi-lo)/2);
    if (search < array[middle]){
      hi = middle -1;
    } else if (search > array[middle]){
      lo = middle +1;
    } else {
      return middle;
    }
  }

  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

//arrayGenapSorted = [8, 10, 10, 18, 22, 22, 32, 40, 90]
//arrayGanjilSorted = [3, 21, 31, 53, 53, 55, 77, 85, 89]

// Driver code
console.log(binarySearch(8, arrayGenapSorted)) // 0
console.log(binarySearch(10, arrayGenapSorted)) // 1
console.log(binarySearch(33, arrayGenapSorted)) // -1

console.log(binarySearch(53, arrayGanjilSorted)) // 4
console.log(binarySearch(3, arrayGanjilSorted)) // 0
console.log(binarySearch(2, arrayGanjilSorted)) // -1

module.exports = {
  binarySearch
}
