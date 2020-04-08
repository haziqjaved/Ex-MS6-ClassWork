var In1 =prompt("name of Item 1:");
var In2 =prompt("name of Item 2:");
var pr1=prompt("Price of Item 1:");
var pr2=prompt("price of Item 2:");
var q1=prompt("Total Quantity of Item 1: ");
var q2=prompt("Total Quantity of Item 2: ");
var Shipping=prompt("Enter Shipping Charges");
var shipping2 = parseInt(Shipping)
document.write("Price of "+In1+"is "+pr1);
document.write("<br/>");
document.write("Quantity of "+In1+"is "+q1);
document.write("<br/>");
document.write("Price of "+In2+"is "+pr2);
document.write("<br/>");
document.write("Quantity of "+In2+"is "+q2);
document.write("<br/>");
document.write("Shipping Charges: "+shipping2);
document.write("<br/>");

var T_cost= pr1*q1+pr2*q2+shipping2;
document.write("Total Cost of Your Order "+T_cost+" PKR");
document.write("<br/>");
if(T_cost>2000)
{
    var Disc=T_cost/10;
    var T_Disc=T_cost-Disc;
    document.write("Discounted Price is "+T_Disc+" PKR");
}