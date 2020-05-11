




// const insertion = arr => {
//   arr.forEach((item, i) => {
//     let num = arr[i];
//     let j;

//     for (j = i - 1; j >= 0 && arr[j] > num; j--) {
//       arr[j + 1] = arr[j];
//     };
//     arr[j + 1] = num;
//   });

//   return arr;
// }
// console.log(insertion([1,5,2,8,3,4]));


// const isTrue = false
//  'yes it is true'
// :'no, it is false'

// console.log(isTrue);


// function mergeLists(firstList, secondList) {
//     let newList = [];
//     let iteratedNum;

//     while (firstList.length != 0 && secondList.length != 0) {
//         let iteratedNum = getSmallestThenRemove(firstList, secondList)
//         newList.push(iteratedNum)
//     }
//     return newList.concat(firstList).concat(secondList)
// }


// function combineSortedArrays(arr1, arr2) {
//     var length = arr1.length + arr2.length;
//     var newarr = [];
//     var one = 0;
//     var two = 0;
//     for (var z = 0; z < length; z++) {
//         if (one > arr1.length){
//           newarr.push(arr2[two])
//         }
//         if (two > arr2.length){
//           newarr.push(arr1[one])
//         }
//         if (arr1[one] < arr2[two]) {
//             newarr.push(arr1[one])
//             one = one+1
//         }
//         else {
//             newarr.push(arr2[two])
//             two = two+1
//         }
//     }
//     return newarr;
// }

// console.log(combineSortedArrays([2, 4, 6], [1, 3, 5]));
    /**
 * takes in an array, a start index, and an end index
 * picks a random pivot index around which values will be partitioned
 * returns an integer: the new "pivot" index
 * the array should be mutated by the function
 */

// function arrayPartition(arr, startIdx = 0, endIdx = arr.length - 1) {
//   // your code here
// }

// // Math.random() returns a number from 0 up to but excluding 1
// // Math.floor(5.614) returns 5

// const arr = [1, 5, 8, 4, 2, 6]
// console.log(arrayPartition(arr)); // should log an index between 0 and 5
// console.log(arr); // should be mutated and partitioned around the returned index

// all values should be partitioned around the returned pivot index
// for example, if your function chooses a pivot of 3,
// the returned pivot should be 2 (the new pivot index)
// the array might now be [1, 2, 4, 8, 5, 6]
// 4 has all smaller values to its left and all greater values to its right     
// const [small, large] =                             // Use "deconstruction" style assignment
// [1, 5, 8, 4, 2, 6]
//     .reduce((result, element) => {
//       result[element <= 4 ? 0 : 1].push(element); // Determine and push to small/large arr
//       return result;
//     },
//     [[], []]);      
//     console.log(small);         


// function arrayPartition(arr, startIdx = 0, endIdx = arr.length - 1) {
//   let pivotIdx = Math.floor(Math.random() * (endIdx + 1));
//   let pivot = arr[pivotIdx];

//   while (startIdx < endIdx) {
//     while(arr[startIdx] < pivot){
//       startIdx++;
//     }
//     while (arr[endIdx] > pivot){
//       endIdx--;
//     }
//     if (startIdx < endIdx) {
//       let temp = arr[startIdx];
//       arr[startIdx] = arr[endIdx];
//       arr[endIdx] = temp;
//     }
//   }
//   return startIdx;
// }

// const arr = [1, 5, 8, 4, 2, 6]
// console.log("Pivot Value: " + arrayPartition(arr));
// console.log(arr)




/**
 * takes in an UNSORTED array
 * returns the SAME array sorted
 * working in place, use yesterday's arrayPartition internally
 * and call the function recursively as needed
 */

function arrayPartition(arr, startIdx = 0, endIdx = arr.length - 1) {
  let pivotIdx = Math.floor(Math.random() * (endIdx + 1));
  let pivot = arr[pivotIdx];

  while (startIdx < endIdx) {
    while(arr[startIdx] < pivot){
      startIdx++;
    }
    while (arr[endIdx] > pivot){
      endIdx--;
    }
    if (startIdx < endIdx) {
      let temp = arr[startIdx];
      arr[startIdx] = arr[endIdx];
      arr[endIdx] = temp;
    }
  }
  return startIdx;
}

// function quickSort(arr, startIdx = 0, endIdx = arr.length - 1) {
//   var runner;
//   if (arr.length > 1) {
//     runner = arrayPartition(arr, startIdx, endIdx);
//     if (startIdx < runner - 1) {
//       quickSort(arr, startIdx, runner -1);
//     }
//     if (runner < endIdx) {
//       quickSort(arr, runner, endIdx);
//     }
//   }
//   return arr;
// }


console.log(quickSort([1, 5, 2, 8, 3, 4]));
// // should log [1, 2, 3, 4, 5, 8]


// const nums = [1,2,3,4,5];

// function double(num) {
//   return num * 2;
// }

// const newNums = nums.map( double );

// console.log( newNums );



