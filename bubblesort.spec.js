describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('counting the number of swaps', function(){
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([1, 2, 3, 4, 5, 6]);
    expect(swap.calls.count()).toEqual(0);
  })

  
   it('Checking if the array is sorted!', function(){
    expect(bubbleSort([9,7,52,3,8])).toEqual([3,7,8,9,52]);
    expect(bubbleSort([3,1,2])).toEqual([1,2,3]);
    expect(bubbleSort([9,7,52,3,8, 3.2, 11, 14])).toEqual([3,3.2, 7,8,9, 11, 14, 52]);


  })

});

