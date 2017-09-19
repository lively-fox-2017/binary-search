'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
    // Your sorting code

    for (var i = 1; i <= arr.length - 1; i++) {
        for (var j = 0; j < i - 1; j++) {
            if (arr[i] < arr[j]) {
                let result = arr[i];
                arr[i] = arr[j];
                arr[j] = result;
            }
        }
    }
    console.log(arr);
    return arr
}

function binary_search(search, array) {
    // Your searching code
    let depan = 0;
    let belakang = array.length;
    console.log(depan);

    while (belakang >= depan) {
        let tengah = Math.floor((belakang + depan) / 2);
        console.log(tengah);
        if (array[tengah] === search) {
            return tengah;
        } else if (search > array[tengah]) {
            depan = tengah + 1
        } else if (search < array[tengah]) {
            belakang = tengah - 1
        }
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