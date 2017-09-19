'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i = 0; i < arr.length; i++) {
    var min = i
      for (var j = i+1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          var newArr = arr[i];
          arr[i] = arr[j]
          arr[j] = newArr
        }
      }
  }
  return arr
}

console.log(ownSort([40, 18, 22, 32, 90, 10, 10, 22, 8]))
console.log('=====================')
console.log(ownSort([3, 31, 89, 53, 53, 85, 77, 21, 55]))

// function binary_search (search, array) {
//   // Your searching code
//   var low = 0;
//   var high = array.length -1;
//   var mid = 0;
//
//   while (low <= high) {
//     //console.log(low + '||' + high);
//     mid = Math.floor((low+high) / 2)
//
//     if (search < array[mid]) {
//       //console.log('>>>>> ' + array[mid]);
//       high = mid - 1
//     } else if(search > array[mid]) {
//       low = mid + 1
//     } else {
//       return mid
//     }
//   }
//   return -1;
// }

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

function binary_search(search, array , position = 0) {
  var low = 0;
  var high = array.length;
  var mid = Math.floor((low + high) / 2)
  //var newArr = array

  //debugger
  if (low == high) {
    return -1
  } else if (search === array[mid]) {
    return mid + position
  } else if (search < array[mid]) {
    var newArr = array.slice(0, mid)
    return binary_search(search, newArr)
  } else if (search > array[mid]) {
    var newArr = array.slice(mid, high)
    position += mid
    return binary_search(search, newArr, position)
  }

}

// Driver code
// console.log(binary_search(8, arrayGenapSorted)) // 0
console.log(binary_search(32, arrayGenapSorted))
// console.log(binary_search(33, arrayGenapSorted))
//
// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
