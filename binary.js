'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  var temp = 0
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < i; j++){
      if(arr[i] < arr[j]){
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

// [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
// [ 3, 21, 31, 53, 53, 55, 77, 85, 89 ]

// ========== PSEUDOCODE ==========
// => variabel array
// => lakukan perulangan dengan variabel array tersebut
// => kondisikan jika parameter search(atau angka yang ingin kita cari) !== -1
// => kembalikan nilai index perulangan tersebut

function binarySearch(search, array, inA, inB) {
  // Your searching code
  // ========== METODE FORLOOP ==========
  // for(var i = 0; i < array.length; i++){
  //   if(array[i] === search){
  //     return i
  //   }
  // }
  // return -1;

  // ========== METODE RECURSIVE ==========
  let mid = Math.floor((inA + inB) / 2)
  if(inA >= inB && search !== array[mid]){
    return -1
  }else if(array[mid] === search){
    return mid
  }else if(search < array[mid]){
    return binarySearch(search, array, inA, mid - 1)
    // return binarySearch()
  }else{
    return binarySearch(search, array, mid + 1, inB)
  }

}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

console.log(ownSort(arrayGenapSorted))
console.log(ownSort(arrayGanjilSorted))

// Driver code
console.log(binarySearch(8, arrayGenapSorted, 0, arrayGenapSorted.length - 1))
console.log(binarySearch(10, arrayGenapSorted, 0, arrayGenapSorted.length - 1))
console.log(binarySearch(33, arrayGenapSorted, 0, arrayGenapSorted.length - 1))

console.log(binarySearch(53, arrayGanjilSorted, 0, arrayGanjilSorted.length - 1))
console.log(binarySearch(3, arrayGanjilSorted, 0, arrayGanjilSorted.length - 1))
console.log(binarySearch(2, arrayGanjilSorted, 0, arrayGanjilSorted.length - 1))
