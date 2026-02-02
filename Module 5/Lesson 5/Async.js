async function add(a,b) {
    let result = await a+b;
    say(result);
}

function say(text){
    console.log(text);
}

add(13,7);
