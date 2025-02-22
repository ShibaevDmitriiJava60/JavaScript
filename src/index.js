const array = ['HELLO', 122, -10, 'Java', 'JavaScript', 500, 'Nodejs'];
console.log(array);
console.log(array.sort(compNumStr));
console.log("array will be  [500, 122, -10, 'HELLO', 'Java', 'JavaScript','Nodejs']")

function compNumStr(e1, e2) {
    //TODO
    //compares e1 and e2 based on:
   //returns negative, positive or 0 so that
    //sorting was as follows
    //first numbers sorted by descending order
    //after numbers strings sorted by ascending order
    //example: array.sort(compNumStr);
    //array will be  [500, 122, -10, 'HELLO', 'Java', 'JavaScript','Nodejs']
    let res = 0;
    
    if (typeof e1 == 'number' && typeof e2 == 'number'){
        res = e2-e1;
    } else if (typeof e1 == 'string' && typeof e2 == 'string'){
        res = 1;
    } else if (typeof e1 == 'number' && typeof e2 == 'string'){
        res = -1;
    } else if (typeof e1 == 'string' && typeof e2 == 'number'){
        res = 1;
    }

    return res;
}
function orderedList(array) {
    //TODO
    //array is any array containing both numbewrs and strings
    //returns HTML text for ordered list
    //string will have default color
    //number will have red color
    //<ol><li>....</li>...<li>....</li></ol>
    //example (only example)

    let res = '<ol>';
    for (let i =0 ; i<array.length; i++){
        if (typeof array[i] == 'number'){
            res += `<li class="item item_number">${array[i]}</Li>`
        } else if (typeof array[i] == 'string'){
            res += `<li class="item">${array[i]}</Li>`
        }
    }
    res += '</ol>';
    return res;
    
    // `<ol>
    //     <li class="item">Hello</li>
    //     <li class="item item_number">300</li>
    //     <li class="item">Java</li>
    //     <li class="item">Nodejs</li>
    //     <li class="item item_number">100</li>
    // </ol>`
}
const bodyElement = document.querySelector('body');
bodyElement.innerHTML = orderedList(["Hello", 300, "Java", "Nodejs", 100]);