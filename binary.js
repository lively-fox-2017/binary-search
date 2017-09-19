'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code

  for (var i = 1; i < arr.length; i++){
    for(var j = 0; j < i-1;j++){
      var temp = arr[i]
      if(arr[i] < arr[j]){
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  var startIndex = 0;
  var highIndex = array.length;
  var midIndex = Math.floor(startIndex + highIndex / 2);
  while (array[midIndex] == search ){
  if(array[midIndex] > search){
    console.log('masuk if')
    startIndex = midIndex + 1
   }
  }



}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// console.log(arrayGenapSorted);

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
