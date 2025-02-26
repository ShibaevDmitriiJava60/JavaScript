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

  console.log(test({script:"minMax(['a','b','c','d','e'])", expected:['a']}));

  // console.log(`function myReduce for (a,b)=> a+b, for array[1,2,3,4,5,6] and initialValue 9, result 30 == ${myReduce([1,2,3,4,5,6], (a,b)=> a+b,9)}`);
  // console.log(`function myReduce for (a,b)=> a+b, for array[11,22,33] without initialValue, result 66 == ${myReduce([11,22,33], (a,b)=> a+b)}`);

  // console.log(`function minMax with myReduse for array [1,2,3,-2,4,5,6], result [-2,6] == ${minMax([1,2,3,-2,4,5,6])}`);
  // console.log(`function minMax with myReduse for array ['a','b','c','d','e'], result [a,e] == ${minMax(['a','b','c','d','e'])}`);


  function test(testObj){
    //testObj structure {script: <string containing script text>, expected: <any type>}
    //returns resultObj with structure {cript: <string containing script text>, expectedJSON: <JSON string containing expected result>, 
    // actualJSON: <JSON string containing actual result>, result: <string containing either  'passed' or 'failed'>}

    const expectedJSON = JSON.stringify(testObj.expected);
    let evalRes;
    try {
        evalRes = eval(testObj.script);
    } catch (error) {
        evalRes = error;
    }
    const actualJSON = JSON.stringify(evalRes);


    const result = expectedJSON === actualJSON ? 'passed' : 'failed';
    const testResult = createTestResult(testObj.script,expectedJSON,actualJSON,result);
    return testResult;
}

function createTestResult(script, expectedJSON, actualJSON, result){
  return {script, expectedJSON, actualJSON, result};  
}
 
function testFramework(scripts, expextedResults){
  //TODO
  //input______
  //scripts - array of tested scripts
  // expextedResults - array of apropriate results
  //scripts[i] and expected results[i] should be consistant
  //output______
  const bodyElem = document.querySelector('body');
  //bodyElem.innerHTML = orderedList of test results with coloring legend 'passed' - green, 'failed' - red
  //after list summery of passed and failed tests with apropriate coloring (green, red)
  //view list items on the browser
}