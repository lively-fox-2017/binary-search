'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i = 0; i < arr.length; i++) {
    let min = i;
    for (var j = i+1; j < arr.length; j++) {
      if(arr[j]<arr[min]){
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  let startIndex = 0;
  let endIndex = array.length;
  let midIndex;
  while(true){
    midIndex = Math.ceil((startIndex+endIndex)/2);
    if(array[midIndex]== search){
      return midIndex;
    }
    if(midIndex === startIndex && midIndex === endIndex){
      return -1;
    }
    if(search>array[midIndex]){
      startIndex=midIndex+1;
    }
    if(search<array[midIndex]){
      endIndex = midIndex-1;
    }
  }
}

var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);
// // Driver code
 console.log(binary_search(8, arrayGenapSorted));
 console.log(binary_search(10, arrayGenapSorted));
 console.log(binary_search(33, arrayGenapSorted));
 console.log(binary_search(53, arrayGanjilSorted));
 console.log(binary_search(3, arrayGanjilSorted));
 console.log(binary_search(2, arrayGanjilSorted));

// module.exports = {
//   binary_search
// }
