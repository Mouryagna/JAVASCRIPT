function but()
{
    const button = document.querySelector(".butt")
    if(button.innerText ==="start")
    {
        button.innerHTML="Please wait..."
        setTimeout(function()
    {
        button.innerHTML = "Finished"
    },2000)
    }
}
