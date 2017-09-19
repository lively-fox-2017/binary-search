'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let temp=0
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<i;j++){//cek dengan sebelahnya makanya 1
      if(arr[i]<arr[j]){
        temp= arr[i]
        arr[i]=arr[j]
        arr[j]=temp
      }
    }
  }
  return arr
}
// console.log(ownSort());
// console.log(ownSort());


function binary_search (search, array) {
  // Your searching code
  let low=0,
      hi=array.length-1,
      mid=0
  while(low<=hi){
    mid=(low+(hi-low)/2)
    mid=Math.floor(mid)
    if(search<array[mid]){
      hi=mid-1
    }else if(search>array[mid]){
      low=mid+1
    }else{
      return mid
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);

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
