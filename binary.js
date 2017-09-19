'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]
var testArray1 = [1,2,3,4,5]
var testArray2 = [13, 19,24, 29, 32, 37, 43]
var testArray3 = [100,120, 130,135, 150,170]

function ownSort(arr) {
  var temp;
  for(let i=1; i< arr.length; i++){
    for(let j=0; j< i; j++){
      if(arr[i] < arr[j]){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j]= temp;
      }
    }
  }
 return arr;
}

ownSort(testArrayGenap);
ownSort(testArrayGanjil);

function binary_search (search, array) {
  let startIndex = 0;
  let highIndex = array.length-1;
  let midIndex = Math.floor((startIndex+highIndex)/2);
while(startIndex <= highIndex){
  if(search === array[midIndex]){
    return midIndex;
  }else{
  if(search > array[midIndex]){
    startIndex = midIndex+1;
    midIndex  = Math.floor((highIndex+startIndex)/2)
  }else{
    highIndex = midIndex-1;
    midIndex = Math.floor((startIndex+highIndex)/2);
   }
  }
}
return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
var test_arraya = ownSort(testArray1)
var test_arrayb = ownSort(testArray2)
var test_arrayc = ownSort(testArray3)

console.log(binary_search(3, test_arraya) === 2)
console.log(binary_search(35, test_arrayb) === -1)
console.log(binary_search(135, test_arrayc) === 3)
// // Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
console.log(binary_search(2, arrayGanjilSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))
// 
// module.exports = {
//   binary_search
// }
