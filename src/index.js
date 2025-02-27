function myReduce(array, callback, initialValue) {
    let accumulator = array[0];
    let index = 1;

    if (initialValue) {
        accumulator = initialValue;
        startIndex = 0;
    }
    
    for(index=startIndex; index<array.length; index++){
         let currentValue = array[index];
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

  function test(testObj){
    //testObj structure {script: <string containing script text>, expected: <any type>}
    //returns resultObj with structure {script: <string containing script text>, expectedJSON: <JSON string containing expected result>, 
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
    //const testResult = createTestResult(testObj.script,expectedJSON,actualJSON,result);
    //return testResult;
    return result;
}

// function createTestResult(script, expectedJSON, actualJSON, result){
//   return {script, expectedJSON, actualJSON, result};  
// }
 
function testFramework(scripts, expextedResults){
  const results = [];
  for (let i=0; i<scripts.length; i++){
    results[i] = test({script:scripts[i], expected:expextedResults[i]});
    console.log(results[i]);
  }
  const bodyElem = document.querySelector('body');
  bodyElem.innerHTML = orderedListForTests(results);
}

function orderedListForTests(array) {
  let res = '<ol>' + array.map((el) => el === 'passed' ? `<li class="item item_passed"> ${el} </li>`: `<li class="item item_failed"> ${el} </li>`) + '</ol>';
  return res;
}

const arrayScripts = ["minMax(['a','b','c','d','e'])", 
                      "minMax(['a','b','c','d','e'])",
                      "minMax([1,2,3,4,5,6])",
                      "minMax([1,2,3,4,5,6])",];
const arrayExpected = [['a','e'], 
                        ['a'],
                        [5,1],
                        [1,6],];

testFramework(arrayScripts, arrayExpected);