var today=new Date();
var dd=today.getDate();
var mm=today.getMonth()+1;
var yyyy=today.getFullYear();
if(mm<10)
{
    mm='0'+mm;
}
document.write("1)"+"Current date is:"+mm+"-"+dd+"-"+yyyy+"<br>");
document.write("2)"+"Current date is:"+mm+"/"+dd+"/"+yyyy+"<br>");
document.write("3)"+"Current date is:"+dd+"-"+mm+"-"+yyyy+"<br>");
document.write("4)"+"Current date is:"+dd+"/"+mm+"/"+yyyy);
