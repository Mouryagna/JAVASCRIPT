var add = function()
{
    console.log(2+3);
}
function runtwice(a)
{
    a();
    a();
}
runtwice(add)