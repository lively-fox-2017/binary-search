'use strict'

let testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
let testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 1 ; i < arr.length ; i++){
    for (let j = 0; j < i-1 ; j++){
      if(arr[i] < arr[j]){
        let temp = arr[j];
        arr[j] = arr[i]
        arr[i] = temp;
      }
    }
  }

  return arr
}

function binarySearch (search, array) {
  /*
  binarySearch(arr, target, mid)
	get mid index if mid is null
	if arr(mid) equal to target, return mid
	else
		Get new mid index
    (0-mid || mid-arr.length-1)
		binarySearch using new mid

  */
  let left = 0;
  let right = array.length-1;
  //console.log(right)
  let mid = Math.floor((left+right)/2);
  //console.log(mid)
  if(array[mid] === search){
    return mid
  }else{
    if(mid === -1){
      console.log(mid)
      return "tidak ditemukan";
    }
    else if(search < array[mid]){
      console.log(mid)
      return binarySearch(search, array.slice(0,mid));
    }else{
      console.log(mid)
      return binarySearch(search, array.slice(mid, array.length-1));
    }
  }

  return 0;
}

let arrayGenapSorted = ownSort(testArrayGenap)
let arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGenapSorted)
console.log(arrayGanjilSorted)
// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}
