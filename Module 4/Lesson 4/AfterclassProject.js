// Sum of Arguments

//Outline:

//In this project, you will be doing sum of arguments by creating functions and will be printing the values of trigonometric degrees by the concepts learnt in class.

function findSum(){
    var i;
    var sum = 0;
    
    for(i = 0;i<arguments.length;i++){
        sum = arguments[i]+sum;
    }

    return sum
}

console.log('\n'+findSum(17,3))