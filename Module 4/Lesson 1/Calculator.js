function Add(num1,num2){
    sum=num1+num2;
    document.getElementById('sum').innerHTML='The sum is ' + sum;
}

function Subtract(num1,num2){
    difference=num1-num2;
    document.getElementById('difference').innerHTML='The difference is ' + difference;
}

function Multiply(num1,num2){
    product=num1*num2;
    document.getElementById('product').innerHTML='The product is '+product;
}

function Divide(num1,num2){
    quotient=num1/num2;
    document.getElementById('quotient').innerHTML='The quotient is '+quotient;
}