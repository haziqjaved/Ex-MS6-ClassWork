let inp = prompt("enter a string to check its palindrome or not?");
function tocheck(name)
{
   const revstr = name.split("").reverse().join("");
    if(name==revstr)
    {
        alert("its Palindrome")
        return name === revstr;
    }
    else
    {
        alert("not a Palindrome")
    }
}
document.write(tocheck(inp));
