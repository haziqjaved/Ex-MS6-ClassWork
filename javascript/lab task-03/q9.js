var sub1= prompt("Enter Marks of Subject1:");
var sub2= prompt("Enter Marks of Subject2:");
var sub3= prompt("Enter Marks of Subject3:");
var T_marks= prompt("Enter Total marks");
O_marks=parseInt(sub1)+parseInt(sub2)+parseInt(sub3);
var per = O_marks/T_marks*100;
document.write("Obtained Marks: "+O_marks);
document.write("<br>");
document.write("Total Marks"+T_marks);
document.write("<br>");
document.write("Percentage: "+per+"%");
document.write("<br>");
if(per>=80)
{
    document.write("Grade: A-one");
    document.write("<br>");
    document.write("Excellent");
}
else if(per>=70)
{
    document.write("Grade: A");
    document.write("<br>");
    document.write("Good");

}
else if(per>=60)
{
    document.write("Grade: B");
    document.write("<br>");
    document.write("You need to improve");
}
else
{
    document.write("Grade: Fail");
    document.write("<br>");
    document.write("Sorry");
}