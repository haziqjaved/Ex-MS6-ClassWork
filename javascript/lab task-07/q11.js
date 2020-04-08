var x=32243;
function Rev(x)
{
    x=x+"";
    var newNum =x.split("").reverse().join("");
    return newNum;
}
document.write(Rev(x));