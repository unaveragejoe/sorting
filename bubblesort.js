

function bubbleSort(array){
//nested for loop
//within the for loop to call swap
//[3,1, 2]
var temp;
for(var outer = 0; outer < array.length -1; outer++){


    for(var inner = 0; inner < array.length -1; inner++){
        
        if (array[inner] > array[inner + 1]) {
            temp = swap(array[inner], array[inner + 1]);
            array[inner] = temp[0];
            array[inner + 1] = temp[1];
        }

     
        
    }
}
    return array;
}

function swap(current, next) {
    
            var swapped = next;
            next = current;
            current = swapped;
    
    return [current, next];
}