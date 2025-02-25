function myReduce(array, callback, initialValue) {
    let accumulator = array[0];
    let index = 1;

    if (initialValue) {
        accumulator = initialValue;
        index = 0;
    }
    
    for(index; index<array.length; index++){
        currentValue = array[index];
        accumulator = callback(accumulator, currentValue, index, array);
    }
    return accumulator; 
  }

  function minMax(arr){
    let minMaxEl = [];
    minMaxEl[0] = myReduce(arr, (acc,cur) => acc < cur ? acc : cur, arr[0]);
    minMaxEl[1] = myReduce(arr, (acc,cur) => acc > cur ? acc : cur, arr[0]);
    return minMaxEl;
  }

  console.log(`function myReduce for (a,b)=> a+b, for array[1,2,3,4,5,6] and initialValue 9, result 30 == ${myReduce([1,2,3,4,5,6], (a,b)=> a+b,9)}`);
  console.log(`function myReduce for (a,b)=> a+b, for array[11,22,33] without initialValue, result 66 == ${myReduce([11,22,33], (a,b)=> a+b)}`);

  console.log(`function minMax with myReduse for array [1,2,3,-2,4,5,6], result [-2,6] == ${minMax([1,2,3,-2,4,5,6])}`);
  console.log(`function minMax with myReduse for array ['a','b','c','d','e'], result [a,e] == ${minMax(['a','b','c','d','e'])}`);

 