'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  // Your sorting code
  // for i = 1 to n-1
  for (var i = 1; i <= arr.length - 1 ; i++)
  {
    // for j = 0 to i-1
    for (var j = 0; j <= i - 1; j++)
    {
      let temp = arr[i];//let temp = A[i]
      // if A[i] < A[j]
      if (arr[i] < arr[j])
      {
        //swap A[i] and A[j]
        arr[i] = arr[j];
        arr[j] = temp;
      }//end if
    }//end for
  }//end for
  //return A
  return arr;
}
//
// console.log(ownSort(testArrayGenap));
// console.log(ownSort(testArrayGanjil));

function binary_search (search, array) {
  // Your searching code
  let startIndex = 0;// let start = 0
  let highIndex = array.length; // let end = A length
  //while end >= start
  while (startIndex <= highIndex){
    // console.log('start', startIndex);
    // console.log('end', highIndex);
    let midIndex = Math.floor((startIndex + highIndex) / 2);//let mid = start+end/2
    // console.log('mid', midIndex);
    // if arr(mid) equal to target, return mid
    if (array[midIndex] === search){
      return midIndex;
    }// end if
    // else if mid < search new start = mid index+1
    else if (array[midIndex] < search) {
      startIndex = midIndex + 1;
    }// end if
    // else if mid > search new start = mid index-1
    else if (array[midIndex] > search) {
      highIndex = midIndex - 1;
    }// end if
  }// end while
// return -1
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);

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
