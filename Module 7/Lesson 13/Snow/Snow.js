const snowContainer = document.getElementById('snow-container');

function createSnowflake(){
    const snowflake = document.createElement("div");
    snowflake.classList.add('snowflake');
    const size = Math.random()*8+2;
    snowflake.style.width=size+'px';
    snowflake.style.height=size+'px';
    
    snowflake.style.left=Math.random()*window.innerWidth+'px';

    const duration = Math.random()*3+2;
    snowflake.style.animationDuration = duration+'s';

    snowflake.style.opacity = Math.random();

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    },duration*1000);
}

setInterval(createSnowflake,100);