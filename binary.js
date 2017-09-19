'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

// function ownSort(arr) {
//   for (var i =  0; i <= arr.length - 1; i++) {
//     for (var j = 0; j <= i; j++) {
//       if (arr[j + 1] < arr[j]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

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
    var guess;
    var min = 0;
    var max = array.length - 1;

    while(min <= max){
      guess = Math.floor((min + max) /2);
	     if(array[guess] === search)
	      return guess;
	      else if(array[guess] < search)
	        min = guess + 1;
	      else
	        max = guess - 1;
     }
     return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
// console.log(arrayGenapSorted)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
// console.log(binarySearch(33, arrayGenapSorted))

// console.log(binarySearch(53, arrayGanjilSorted))
// console.log(binarySearch(3, arrayGanjilSorted))
// console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}
