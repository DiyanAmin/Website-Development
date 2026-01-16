var user = {'user1':'pass@123','userTwo':'passAtTheRateOneTwoThree'};
var color = ['red','orange','yellow','green','blue','indigo','violet'];

console.log('The password of user1 is: ',user.user1,'\nFor userTwo: ',user.userTwo,'\nColors: ',color);
console.log('\n\n');
console.log(color.join('**'));
color.pop();
console.log(color);