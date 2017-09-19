'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let temp;
  for(var i=1; i<arr.length; i++){
    for(var j=0; j<i; j++){
      if(arr[i]<arr[j]){
        temp = arr[i];
        arr[i]= arr[j];
        arr[j]= temp;
      }
    }
  }
  return arr
}
//console.log(ownSort(testArrayGanjil));
function binary_search (search, array) {
  // Your searching code
  let awal= 0;
  let akhir = array.length;
  let mid ;
  while (akhir!=mid && awal!= mid){
    debugger;
    mid = Math.ceil((akhir+awal)/2);
    if(array[mid]== search){
      return mid;
    }else if(search>array[mid]){
      awal=mid+1;
    }else if(search<array[mid]){
      akhir = mid-1;
    }

    //console.log('awal ', awal);
    //console.log('mid ', mid);
    //console.log('akhir ', akhir);
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
