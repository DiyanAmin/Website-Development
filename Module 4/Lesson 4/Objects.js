Users = {'user1':'pass@123','user2':'pass@12345'};
console.log(Users.user2+'\n');

var math1 = Math.abs(-20);
var math2 = Math.acos(-1);
var math3 = Math.asin(1);
var math4 = Math.atan(0.5);
var randomNum = Math.floor(Math.random()*9999)+1;

console.log('abs : '+math1+'\n');
console.log('acos : '+math2+'\n');
console.log('asin : '+math3+'\n');
console.log('atan : '+math4+'\n');
console.log('Random Number : '+randomNum+'\n');


function findMax(){
    var i;
    var max = 0;
    
    for(i=0;i < arguments.length;i++){
        if(arguments[i] > max){
            max=arguments[i]
        }
    }

    return max;

}
// document.getElementById('findMax').innerHTML = findMax(4,5,6);
console.log(findMax(4,5,6)+'\n')