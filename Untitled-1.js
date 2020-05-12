/**
 * takes in two SORTED arrays
 * returns a new SORTED array
 * with the largest occurrence of each distinct number
 * BONUS: deduplicate the output
 */

function intersectSortedArrays(arr1, arr2) {
    let valuedict1 = {};
    let valuedict2 = {};
    let newarr = [];
    for (let i=0; i<arr1.length; i++){
        let pointer1 = arr[i];
        if (valuedict1.hasOwnProperty(i)){
            valuedict1[i]++;
        }
        } else {
            valuedict1[i]=1;
            valuedict1[i]++;
            
        }
    for (let j=0; i<arr2.length; j++){
        let pointer2= arr[j];
        if (valuedict2.hasOwnProperty(j)){
            valuedict2++;
        }
        }else{
            valuedict1[i]=1;
            valuedict2++
        }
    }
    }
    // let frequency1 = 0;
    // let frequency2 = 0;
    // let newarr = [];
    // for(let i = 0, i<arr1.length, i++){
    //     for(let j = 0, j<arr2.length, j++){
    //         let pointer1 = arr1[i];
    //         let pointer2 = arr2[j];
    //         if (pointer1 === pointer2){
    //             frequency1++;
    //             fequency2++;
    //             if(frequency1 > frequency2){
    //                 newarr.push
    //             }
    //         }
    //     }
    // }
    // while(newarr.length < arr1.length + arr2.length){
    //     if (pointer1<pointer2){
    //         newarr.push(pointer1);
    //     }
    //     else {newarr.push(pointer2);}
    // }
  }
  
  console.log(intersectSortedArrays([1, 2, 2], [2, 3, 3]));
  // should log [1, 2, 2, 3, 3]

  
  function intersectSortedArraysDedupe(arr1, arr2) {
    let pointer1 = arr1[0];
    let pointer2 = arr2[0];
    let newarr = [];
    if(pointer1==pointer2){
        newarr.push(pointer1)
        let newval = 0
        while(newval=){

        }
    }
  }
  
  console.log(intersectSortedArraysDedupe([1, 2, 2], [2, 3, 3]));
  // should log [1, 2, 3]