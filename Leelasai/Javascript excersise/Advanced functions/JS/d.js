var msgs = 0;
setInterval(function () {
    msgs = document.querySelector(".msgs").innerHTML;
    setInterval(function(){
        document.querySelector(".title").innerHTML=`${msgs} New msgs`
    })
},1000)