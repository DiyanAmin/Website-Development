var greeting;
var time = new Date().getHours();
// console.log(time);

if (time<10){
    greeting='Good Morning';
}

else if(time <20){
    greeting='Good Day';

}

else{
    greeting='Good Evening';
}

console.log(greeting);  