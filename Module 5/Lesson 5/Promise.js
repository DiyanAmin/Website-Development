function say(text){
    console.log(text);
}

function add(a,b) {
    let result =a+b;
    say(result);
}

let myPromise=new Promise(function(myResolve,myReject){let x = 0;if(x==0){myResolve("Ok");}else{myReject('Error');}})

myPromise.then(
    function(value){add(5,5);},
    function(error){add(error);}
);
