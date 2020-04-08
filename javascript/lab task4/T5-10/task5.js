var cabs = ["careem","uber","bykea"]
for(var i=0;i<=2;i++)
{
    for(var j=0;j<=2;j++)
    {
        if(cabs[i]!=cabs[j])
        {
            document.write(cabs[i]+" & "+cabs[j]+" "+"are good service"+"<br>");
        }
    }
}