function but()
{
    const button = document.querySelector(".c")
    if(!isadding)
    {
        document.querySelector(".added").innerHTML = "Added";
        isadding=true;
        setTimeout(function () {
            isadding=false;
            document.querySelector(".added").innerHTML = "";
        },2000)
    }
}
var isadding = false;