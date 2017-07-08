describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 5, 2, 11, 8])).toEqual([[5, 11], [1, 2, 8]])
  });
});

//consider what to do for odd length arrays


// Merge Sort uses a merge algorithm for combining sorted arrays into a single sorted array. 
// Create a test for this function in mergesort.spec.js:

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algo
    expect(merge([3],[1])).toEqual([1, 3])
    expect(merge([5, 7, 10],[2, 3])).toEqual([2, 3, 5, 7, 10])
  });
});
