'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr){
  var swap;
  var swapCount = 0;

  do{
      for (var i = 1, swapCount = 0; i < arr.length; i++){
          if(arr[i - 1]>arr[i]){
              swap = arr[i - 1];
              arr[i - 1] = arr[i];
              arr[i] = swap; 
              swapCount +=1;
          }
      }
  }while(swapCount>0 ); 
  return arr; 
}

function binarySearch (search, array) {
    // Your searching code
    if(array.length == 1 && array[0] !== search) {
      return -1
    }
    if(array.length == 1 ) {
      return array[0]
    }
    if(array[Math.floor(array.length/2)] == search) {
      return array[Math.floor(array.length/2)]
    } else if (array[0] === array [1] && array[0] === search) {
      return array[0]
    } else if(search < array[Math.floor(array.length/2)]) {
      array.splice(Math.floor(array.length/2))
      console.log(array)
      return binarySearch(search, array)
    } else if (search > array[Math.floor(array.length/2)]) {
      array.splice(0,Math.floor(array.length/2))
      console.log(array)
      return binarySearch(search,array)
    }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
// console.log(arrayGenapSorted)

// Driver code
// console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
// console.log(binarySearch(3, arrayGanjilSorted))
// console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}
