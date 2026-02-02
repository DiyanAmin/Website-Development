function add(a,b,myCallback) {
    let result =a+b;
    myCallback(result);
}

function say(text){
    console.log(text);
}

add(5,25,say)