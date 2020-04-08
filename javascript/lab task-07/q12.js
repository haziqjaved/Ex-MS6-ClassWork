
function xyz(str)
{
    start= str.substring(0,4);
     if(start=='Java')
    {
        return true;
    }
    else if(str.length<4)
    {
        return false;
    }
    else
    {
        return false;
    }
}
document.write(xyz("JavaScript"));
document.write("<br>");
document.write(xyz("phyton"));

