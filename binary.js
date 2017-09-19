'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  var ai = 0;
  var aj= 0;
  for (var i=1;i<arr.length;i++){
    for (var j=0 ; j < i ; j++){
      if (arr[i]<arr[j]){
        ai=arr[i];
        aj=arr[j];
        arr[i]=aj;
        arr[j]=ai;
      }
    }
  }
  return arr
}


function binary_search (search, array) {
  // Your searching code
  var iStart = 0 ;
  var iEnd = array.length -1 ;
  var iMid = Math.ceil((iStart + iEnd)/2);

  while (iStart<=iEnd){
    if (array[iMid]==search){
      return iMid;
    }
    else{
      if (array[iMid] < search){
        iStart = iMid + 1 ;
        iMid = Math.ceil((iStart + iEnd)/2) ;
      }
      else{
        iEnd = iMid - 1 ;
        iMid = Math.ceil((iStart + iEnd)/2) ;
      }
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
