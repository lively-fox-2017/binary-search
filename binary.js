'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for ( var i = 0; i < arr.length; i++){
	    var tampung = arr[i];
	  	var j = i - 1;

    while (j >= 0 && arr[j] > tampung) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = tampung;
  }
return arr;
}

function binarySearch (search, array) {
  // Your searching code
  var mid;
  var min = 0;
  var max = array.length - 1;	

    while(min <= max){
        mid = Math.floor((min + max) /2);

		if(array[mid] === search){
	    	return mid;
		}
		else if(array[mid] < search){
	    	min = mid + 1;
		}
		else{
	    	max = mid - 1;	
		}
     }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);

// Driver code
console.log(binarySearch(8, arrayGenapSorted));
console.log(binarySearch(10, arrayGenapSorted));
console.log(binarySearch(33, arrayGenapSorted));

console.log(binarySearch(53, arrayGanjilSorted));
console.log(binarySearch(3, arrayGanjilSorted));
console.log(binarySearch(2, arrayGanjilSorted));

module.exports = {
  binarySearch
}
