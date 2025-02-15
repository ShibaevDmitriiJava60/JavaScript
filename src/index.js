console.log('1000');

const sum = function(a, b){
    return a + b;
}

const substract = function(a, b){
    return a - b;
}

const divide = function(a, b){
    return a/b;
}

const multiply = function(a, b){
    return a*b;
} 



// console.log(sum+"");

function calculate(fun, a, b){
    return fun(a,b);
}

console.log(calculate(sum, 10, 5));
 

console.log(calculate(sum,5,multiply(2,sum)));


