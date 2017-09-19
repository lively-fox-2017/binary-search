'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  
  for (var i = 1; i <= arr.length; i++) {
    for (var j = 0; j < i; j++) {
      
      if (arr[i] < arr[j]){
        let temp = arr[i]; 
        arr[i] = arr[j];    
        arr[j] = temp;
      }
    }
  }
  arr;
  return arr;
}

function binary_search (search, array) {
  //?Your searching code
  let high = array.length;
  
  let low = 0;
  
  while(low <= high ){
    
    let mid = Math.ceil((low + high) / 2)
   
    
    if (array[mid] === search){
      return mid;
    }
    else if(search < array[mid]){
      high = mid - 1;
    }
    else if(search > array[mid]){
      low = mid + 1;
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