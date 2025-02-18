function minMax(...values){

if(Array.isArray(values[0])){
    arrayValues = [...values[0]];
    let min=arrayValues[0];
    let max=arrayValues[0];
} else {
    min = values[0];
    max = values[0];
}

for (let i=1; i<values.length; i++){
    if(Array.isArray(values[i])){
        arrayValues = [...values[i]];
        for(let i=0; i<arrayValues.length; i++){
            if(arrayValues[i]>=max){
                max=arrayValues[i];
            } 
            else {
                min=arrayValues[i];
            } 
        }
    } else
    
    if(values[i]>=max){
        max=values[i];
    } 
    if(values[i]<min) {
        min=values[i];
    }
}

let res = [min,max];
return res;
}


console.log(`Minimal and maximal for (1,2,3,4,5,6,7,8) (1,8): ${Math.min(1,2,3,4,5,6,7,8)},${Math.max(1,2,3,4,5,6,7,8)} = ${minMax(1,2,3,4,5,6,7,8)}`);
console.log(`Minimal and maximal for (1,2,3,4,5,80,-80,-3,-5,-2)(-80,80): ${Math.min(1,2,3,4,5,80,-80,-3,-5,-2)},${Math.max(1,2,3,4,5,80,-80,-3,-5,-2)} = ${minMax(1,2,3,4,5,80,-80,-3,-5,-2)}`); 
console.log(`Minimal and maximal for (1,2,3,[10,-20,30]) (-20,30): ${Math.min(1,2,3,...[10,-20,30])},${Math.max(1,2,3,...[10,-20,30])} = ${minMax(1,2,3,[10,-20,30])}`);
console.log(`Minimal and maximal for ([10,-20,30],1,2,3) (-20,30): ${Math.min(...[10,-20,30],1,2,3)},${Math.max(...[10,-20,30],1,2,3)} = ${minMax([10,-20,30],1,2,3)}`);     
console.log(`Minimal and maximal for (1,2,[10,-20,30],3) (-20,30): ${Math.min(1,2,...[10,-20,30],3)},${Math.max(1,2,...[10,-20,30],3)} = ${minMax(1,2,[10,-20,30],3)}`);   