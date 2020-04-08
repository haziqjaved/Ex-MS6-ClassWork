var str= "The quick brown fox jumps  over the lazy dog";
var i,j=0;
for(i=0;i<str.length;i++)
{
    if((str.charAt(i)=="t" || str.charAt(i)=="T") && (str.charAt(i+1)=="h"||str.charAt(i+1)=="H") && (str.charAt(i+2)=="e"||str.charAt(i+2)=="E"))
    {
        j=j+1;
    }
}
document.write(j);