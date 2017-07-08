function split(wholeArray) {

var firstHalf = [];
var secondHalf = [];

  /* your code here to define the firstHalf and secondHalf arrays */
for (var i = 0 ; i < wholeArray.length; i++) {
    if (i % 2) {
        firstHalf.push(wholeArray[i]);
    }
    else {
        secondHalf.push(wholeArray[i]);
    }
}  

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
// if arr1[0] > arr2[0] then arr2.concat(arr1);
var mergedArray = [];

while(arr1.length > 0 || arr2.length > 0){

    if (arr2.length === 0 && arr1.length > 0) {
        mergedArray = mergedArray.concat(arr1);
        arr1 = [];
    }

    if (arr1.length === 0 && arr2.length > 0) {
        mergedArray =mergedArray.concat(arr2);
        arr2 = [];
    }

    if (arr1.length > 0 && arr2.length > 0) {
        if(arr1[0] > arr2[0]){
            mergedArray.push(arr2.shift());
        } else {
            mergedArray.push(arr1.shift());
        }
    }
}


    return mergedArray;

}

// Now you have all the merge and sort functions, implement the recursive mergeSort function.

// The function signature could look like:

function mergeSort(array, splittedArray) {

var temp = array;

if (!splittedArray) {
    splittedArray = [];
}


var tempSplit = split(temp);

// split(array), results in 2 arrays
/*
while (tempSplit[0].length !== 1) {
    tempSplit = split(tempSplit[0]


split(tempSplit[0])
split(tempSplit[1])

-------------------

split(tempSplit[0][0])
split(tempSplit[0][1])
split(tempSplit[1][0])
split(tempSplit[1][1])
*/

if (tempSplit[0].length === 1) {
    splittedArray.push(tempSplit[0]);
}
else {
    mergeSort(tempSplit[0], splittedArray);
}

if (tempSplit[1].length === 1) {
    splittedArray.push(tempSplit[1]);
}
else {
    mergeSort(tempSplit[1], splittedArray);
}

console.log(splittedArray);




//merge


}


// You should also write a test to test the mergeSort function.