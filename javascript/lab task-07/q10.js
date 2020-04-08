var str = prompt("Enter a String");
function palindrome(str)
{
    var newStr= str.split("").reverse().join("");
    return str===newStr;
}
document.write(palindrome(str));