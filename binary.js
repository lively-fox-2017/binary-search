'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let temp;
     for (var i = 1; i < arr.length; i++) {
       for (var j = 0; j < i; j++) {
         if (arr[i]<arr[j]) {
           temp = arr[i]
           arr[i]=arr[j]
           arr[j]=temp
         }
       }
     }

  return arr;
}
//console.log(ownSort([40, 18, 22, 32, 90, 10, 10, 22, 8]));


function binary_search (search, array) {
  let length = array.length // panjang array
  let arrMid=Math.floor(length/2); // indeks tengah
  let arrNew;
  if (array[arrMid]==search) {// jika nilai tengah array = angka yang dicari, return indeksnya
    return arrMid
  }else if(array[arrMid] > search) { // jika nilai tengah array lebih dari nilai yang dicari , slice array dari indeks 0 sampai indeks tengah lalu assign ke array baru
    arrNew = array.slice(0, arrMid);
    return binary_search(search, arrNew); // recursif sampai nilainya ketemu (sepanjang array baru)
  }else if (array[arrMid] < search) {// jika nilai tengah array kurang dari nilai yang dicari , slice array dari indeks tengah+1 sampai ujung lalu assign ke array baru
    arrNew = array.slice(arrMid + 1, length);
    return binary_search(search, arrNew);// recursif sampai nilainya ketemu (sepanjang array baru)
  } else { // rem untuk kasus nilai tidak ada dalam array
    return -1;
  }

}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(arrayGenapSorted)
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
//
console.log(arrayGanjilSorted)
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
