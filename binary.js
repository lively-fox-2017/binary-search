'use strict'

var testArrayGenap = [
  40,
  18,
  22,
  32,
  90,
  10,
  10,
  22,
  8
]
var testArrayGanjil = [
  3,
  31,
  89,
  53,
  53,
  85,
  77,
  21,
  55
]

function ownSort(arr) {
  // Your sorting code
  // ===========METODE SELECTION SORT============
  // sort code : http://codingmiles.com/sorting-algorithms-selection-sort-using-javascript/
  let len = arr.length
  let min;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[i]) {
        let swap = arr[i];
        arr[i] = arr[j]
        arr[j] = swap
      }
    }
  }
  return arr;
}
// ====DRIVER CODE====

// [ 3, 21, 31, 53, 53, 55, 77, 85, 89 ]
// console.log(ownSort(testArrayGanjil));
// [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
// console.log(ownSort(testArrayGenap));
//
// function binary_search(search, array) {
//   // Your searching code
//   //tentukan awal
//   let awal = 0;
//   //tentukan akhir
//   let akhir = array.length
//
//   //selama awal lebih kecil dari akhir maka
//   while (awal <= akhir) {
//     //cari nilai index mid
//     let mid = Math.floor((awal + akhir) / 2)
//     //jika search sama dengan nilai mid maka ambil nilainya
//     if (search == array[mid]) {
//     //ambil nilai midnya
//       return mid;
//     //jika search > array mid | maka awalnya ditambah 1 |
//     } else if (search > array[mid]) {
//       awal = mid + 1
//       mid = Math.floor((awal + akhir) / 2)
//     //jika search < array mid | maka akhirnya dikurang 1|
//     } else if (search < array[mid]) {
//       akhir = mid - 1
//       mid = Math.floor((awal + akhir) / 2)
//     }
//   }
//   //selain nilainya -1
//   return -1
// }

// ==========REKURSIF=============

function binary_rekursif(search,array,indexAwal,indexAkhir) {
    //Buat Cari Nilai Tengah
    let mid = Math.floor((indexAwal + indexAkhir) / 2)
    console.log('Index Awal = '+indexAwal);
    console.log('Index Akhir = '+indexAkhir);
    if(search != array[mid] && indexAwal >= indexAkhir){
      return -1;
    } else if (search == array[mid]) {
      return mid;
    } else if (search > array[mid]) {
      // awal = mid + 1
      return binary_rekursif(search,array,mid+1,indexAkhir)
    } else if (search < array[mid]) {
      // akhir = mid - 1
      return binary_rekursif(search,array,indexAwal,mid-1)
    }
}
// ============DRIVER CODE===============
var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
//
// console.log(binary_search(8, arrayGenapSorted)) //  1
// console.log(binary_search(10, arrayGenapSorted)) // -2
// console.log(binary_search(33, arrayGenapSorted)) // -1
//
// console.log(binary_search(53, arrayGanjilSorted)) // 3 atau 4
// console.log(binary_search(3, arrayGanjilSorted)) // 1
// console.log(binary_search(2, arrayGanjilSorted)) // -1

// [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
// console.log('==========Ganjil==========');
// console.log(ownSort(testArrayGanjil));
// console.log(binary_rekursif(53, arrayGanjilSorted,0,testArrayGanjil.length-1)) // 3 atau 4
// console.log(binary_rekursif(3, arrayGanjilSorted,0,testArrayGanjil.length-1)) // 0
// console.log(binary_rekursif(2, arrayGanjilSorted,0,testArrayGanjil.length-1)) // -1
console.log('==========Genap===========');
console.log(ownSort(testArrayGenap));
console.log(binary_rekursif(10, arrayGenapSorted,0,testArrayGenap.length-1)) // 3 atau 4
// console.log(binary_rekursif(90, arrayGenapSorted,0,testArrayGenap.length-1)) // 1
// console.log(binary_rekursif(33, arrayGenapSorted,0,testArrayGenap.length-1)) // -1
// console.log('==========================');

module.exports = {
  // binary_search,
  binary_rekursif
}
