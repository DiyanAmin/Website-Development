var TheString = 'mOcKiNg';

function DifferentMethods(){

    document.writeln('To Upper Case = '+TheString.toUpperCase());
    document.writeln('<br> <br>');

    document.writeln('To Lower Case = '+TheString.toLowerCase());
    document.writeln('<br> <br>');

    document.writeln('Starts with i = '+TheString.startsWith('i'));
    document.writeln('<br>');
}

var fruits=['Apple','Mango','Not A Fruit','Lettuce'];
var i=0
var TheText=''

for(i=0;
    i < fruits.length;
    i++
){
    TheText+=fruits[i] + '<br> <br>';
}

document.getElementById('ForLoop').innerHTML=TheText;

var day=''

switch(new Date().getDay()){

    case 0:
        day='Sunday';
        break;

    case 1:
        day='Monday';
        break;

    case 2:
        day='Tuesday';
        break;

    case 3:
        day='Wednesday';
        break;

    case 4:
        day='Thursday';
        break;

    case 5:
        day='Friday';
        break;

    case 6:
        day='Saturday';
        break;

}

document.getElementById('Day').innerHTML = 'Todays day is: '+day;


// function FindPrimeNumbers(num){
//     if(num%2==0){
//         document.write(num+' is not a prime number')
//     }

// }

