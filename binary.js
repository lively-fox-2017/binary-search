'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i = 0; i < arr.length; i++) {
    let banding = arr[i]
    for (var j = i -1; j >= 0 && (arr[j] > banding); j-- ) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = banding
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  var min = 0;
  var max = array.length-1;
  var mid = Math.floor((max+min)/2);

  	if (array[mid] === search){
  		return mid;
    
    } else if (array[mid] < search) {
      // min = mid-1;
      console.log(array.slice(mid, max))
      return binary_search(search, array.slice(mid, max))

    } else if (array[mid] > search) {
      // max = mid+1;
      console.log(array.slice(min, mid))
      return binary_search(search, array.slice(min, mid))
    
    } else if (array[mid] !== search){

      return -1;
    }

}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

console.log(arrayGenapSorted)
console.log(arrayGanjilSorted)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

// module.exports = {
//   binarysearch
// }
