function minMax(...values){
let min = Infinity;
let max = -Infinity;
    for (let i=0; i<values.length; i++){
        if(Array.isArray(values[i])){
            min = minMaxArray(values[i])[0];
            max = minMaxArray(values[i])[1];
        } else
        if(values[i]>=max){
            max=values[i];
        } 
        if(values[i]<min) {
            min=values[i];
        }
    }
return [min,max];
}

function minMaxArray(array){
let min = Infinity;
let max = -Infinity;
    for(let i=0; i<array.length; i++){
        if(array[i]>max){
            max=array[i];
        } 
        if(array[i]<min){
            min=array[i];
        } 
    }
return [min, max];
}


console.log(`Minimal and maximal for (1,2,3,4,5,6,7,8) (1,8): ${Math.min(1,2,3,4,5,6,7,8)},${Math.max(1,2,3,4,5,6,7,8)} = ${minMax(1,2,3,4,5,6,7,8)}`);
console.log(`Minimal and maximal for (1,2,3,4,5,80,-80,-3,-5,-2)(-80,80): ${Math.min(1,2,3,4,5,80,-80,-3,-5,-2)},${Math.max(1,2,3,4,5,80,-80,-3,-5,-2)} = ${minMax(1,2,3,4,5,80,-80,-3,-5,-2)}`); 
console.log(`Minimal and maximal for (1,2,3,[10,-20,5]) (-20,10): ${Math.min(1,2,3,...[10,-20,5])},${Math.max(1,2,3,...[10,-20,5])} = ${minMax(1,2,3,[10,-20,5])}`);
console.log(`Minimal and maximal for ([100,-20,30],1,2,3) (-20,100): ${Math.min(...[100,-20,30],1,2,3)},${Math.max(...[100,-20,30],1,2,3)} = ${minMax([100,-20,30],1,2,3)}`);     
console.log(`Minimal and maximal for (10,20,[1,-2,3],30) (-2,30): ${Math.min(10,20,...[1,-2,3],30)},${Math.max(10,20,...[1,-2,3],30)} = ${minMax(10,20,[1,-2,3],30)}`);  
console.log(`Minimal and maximal for ([10,30,5]) (5,30): ${Math.min(...[10,30,5])},${Math.max(...[10,30,5])} = ${minMax(...[10,30,5])}`);    