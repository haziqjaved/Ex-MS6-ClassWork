var num1=prompt("Enter First Number:");
var num2=prompt("Enter Second Number:");
var Opr=prompt("select Operation:(1.+ 2.- 3.*4./)");
if(Opr==1)
{
    var add=parseInt(num1)+parseInt(num2);
    alert("Addition of "+num1+" & "+num2+" is "+add);
}
else if(Opr==2)
{
    var sub=parseInt(num2-num1);
    alert("Subtraction of "+num1+" & "+num2+" is "+sub);
}
else if(Opr==3)
{
    var mul=parseInt(num1*num2);
    alert("Multiplication of "+num1+" & "+num2+" is "+mul);
}
else if(Opr==4)
{
    var div=parseInt(num2/num1);
    alert("Dvision of "+num1+" & "+num2+" is "+div);
}