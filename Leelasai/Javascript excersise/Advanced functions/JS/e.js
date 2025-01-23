function clicked()
{
    const button = document.querySelector(".butt");
    const p = document.querySelector(".load")
    button.innerHTML = "Adding";
    p.innerHTML = "Loading...";
    clearTimeout();
    setTimeout(function()
    {
        p.innerHTML="";
        button.innerHTML="Add to cart";
    },2000)
}