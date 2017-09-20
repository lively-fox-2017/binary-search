'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let temp=[]
  for(let i=0;i < arr.length;i++){
  	for(let j=0;j < i;j++){
  		if(arr[i] < arr[j]){
	  		let box=arr[i];
  			arr[i]=arr[j];
  			arr[j]=box
  		}
  	}
  }
  return arr
}
// function binary_search (search, array) {
//   // Your searching code
//   console.log(array)
//   var len=array.length;
//   var med=Math.floor(len/2);
//   	for(var i=0;i<len;i++){
//   		if(search<=array[med]){
//   			if(search==array[med]){
//   				return med;
//   			}else{
//   				med=Math.floor(med/2);
//   			}
//   		}else if(search >= array[med]){
//   			if(search==array[med]){
//   				return med;
//   			}else{
//   				med=Math.floor(med/2);
//   			}
//   		}
//   	}
//   	return -1;
// }

// With recursive

function binary_search (search, array, index=0) {
  // console.log(array)
	// Your searching code
  let mid=Math.floor(array.length/2)
  index+=mid;
  if(array[mid] == search){
    return index
  } 
  else{
    if(array.length == 1){
      return -1
    }
    else if(search < array[mid]){
      let temp = [];
      for(let i=0;i < mid;i++){
        temp.push(array[i])
      }
    	return binary_search(search, temp, 0)
    }
    else if(search > array[mid]){
      let temp = [];
      for(let i=mid;i < array.length;i++){
        temp.push(array[i])
      }
      return binary_search(search, temp, index)
    }
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(arrayGenapSorted)
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
console.log(binary_search(18, arrayGenapSorted))

console.log(arrayGanjilSorted)
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
