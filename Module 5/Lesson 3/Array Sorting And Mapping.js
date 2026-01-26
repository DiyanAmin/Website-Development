function ascending(a,b){return a-b}
function descending(a,b){return b-a}

console.log('\n\n',ascending(1e1,2e1),'\n\n');
console.log(descending(1e1,2e1));


var numbers = [1e1,1e4,567e4,32141e2];

function FunctionName(num){return num*10}

var arrayName = numbers.map(FunctionName);

console.log('\n\n',arrayName);

function evalFunc(x,y,z){
    return eval(x*24/y+(z%787*23/6)*1423/24234%3545-13434+34)
}

console.log(evalFunc(34235,325235,1212));