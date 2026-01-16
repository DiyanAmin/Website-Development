function say(text){
    console.log(text)
}

var num = prompt('Enter number:');
if(num%7==0){
    say(num,' is divisible by 7.');

}
else{
    say(num,' is not divisble by seven');
}

var year = prompt('Enter year:');
if(year%4==0){
    say(year,' is a leap year');
}
else{
    say(year,' is not a leap year');
}