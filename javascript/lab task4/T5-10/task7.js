var A=["cake","apple pie ","cookie","chips","patties"]
var B=prompt("Enter any word");
var C=B.toLowerCase();
var i,r;
for(i=0;i<5;i++)
{
    if(C==A[i])
    {
        r=1
    }
}
if(r==1)
{  document.write("Found"); }
else
{ document.write("Not Found!"); }