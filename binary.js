'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
 for(var i = 1; i < arr.length; i++){
 	for(var j = 0; j <= i -1; j++){
 		if(arr[i] < arr[j]){
 			let temp = arr[i]
 			arr[i] = arr[j]
 			arr[j] = temp;
 		}
 	}
 }
 return arr;

}

function binarySearch (search, array) {
  // Your searching code
  let atas = array.length;
  let bawah = 0;
   // console.log(array)

  while(atas >= bawah){
  	let mid = Math.floor((atas + bawah)/2);
  	// console.log('mid '+mid + ' ' +array[mid])

  	//mid 33
  	if(array[mid] === search){
  		return mid;
  	}
  	// /
  	else if(array[mid] > search){
  		atas = mid - 1;
  	}
  	// / 22 < 33
  	else if(array[mid] < search){
  		bawah = mid + 1;
  		// console.log(array[atas])
  	}

  }
 return 0;
}


var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

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
