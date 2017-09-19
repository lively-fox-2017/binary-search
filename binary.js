'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j<i ; j++) {
      if (arr[j]>arr[i]){
        var temp=arr[i];//console.log('temp ke'+i+' = '+temp);
        arr[i]=arr[j];//console.log('isi 1 ke'+i+'='+ arr[i]);
        arr[j]=temp;//console.log('isi 2 ke'+i+' ='+ arr[j]);
        //console.log('---------------'+arr);
      }
    }
  }
  return arr
}

// function binarySearch (search, array) {
//   // Your searching code
//   var start=0,end=array.length,mod=0;
//   //lakukan perulangan jika start <= end
//   while (start<=end) {
//     // console.log('tengah'+(start+end)/2);
//     //ambil nilai tengah dengan rumus (start+end)/2 dan dibulatkan kebawah
//     mod=Math.floor((start+end)/2);
//     //cek jika search === array[mod]
//     if (search===array[mod]) {
//       //return jika mod
//       return mod;
//     } else
//     //cek jika search memiliki nilai < searchArray[mod]
//     if (search<array[mod]) {
//       //assign nilai end=mod-1
//       end=mod-1; //console.log('end '+end);
//     }
//     //jika nilai search nilainya > searchArray[mod]
//     else {
//       //assign start=mod+1
//       start=mod+1; //console.log('start '+start);
//     }
//   }
//   //return jika yang dicari tidak ditemukan
//   return -1;
// }
//var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
function binarySearch (search, array, pos=0) {
  let mod=Math.floor(array.length/2);
  // console.log(array.length);
  pos+=mod;
  if (search===array[mod]) {
    return pos;
  } else {
    if (array.length==1) {
      return -1
    } else
    if (search<array[mod]) {
      let newArr=array.slice(0,mod)
      return binarySearch(search,newArr,0)
    }else {
      let newArr=array.slice(mod,array.length)
      return binarySearch(search,newArr,pos)
    }
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(arrayGenapSorted);
console.log(binarySearch(40, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))
console.log(arrayGanjilSorted);
console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}
