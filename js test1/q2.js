Student_One=
{
Student_Name : 'Ahmed Abbasi',
Student_ID : 'J30052425300',
Subject_HTML : 80,
Student_CSS : 90,
Student_JAVASCRIPT : 90,
Student_BOOTSTRAP : 70,
Total_Marks : 400,
}
Student_Two=
{
Student_Name : 'Javed Akhtar',
Student_ID : 'J30052425300',
Subject_HTML : 60,
Student_CSS : 70,
Student_JAVASCRIPT : 65,
Student_BOOTSTRAP : 85,
Total_Marks : 400,
}

var marksObtain1=(Student_One.Subject_HTML+Student_One.Student_CSS+Student_One.Student_BOOTSTRAP+Student_One.Student_JAVASCRIPT);
var perStudent1=marksObtain1/Student_One.Total_Marks*100;
document.write("Name: Mr."+Student_One.Student_Name);
document.write("<br>");
document.write("ID:"+Student_One.Student_ID);
document.write("<br>");
document.write("Mr."+Student_One.Student_Name+"Percentage is "+perStudent1);
document.write("<br>");
document.write("<br>");
document.write("<br>");




var marksObtain2=(Student_Two.Subject_HTML+Student_Two.Student_CSS+Student_Two.Student_BOOTSTRAP+Student_Two.Student_JAVASCRIPT);
var perStudent2=((marksObtain2/Student_Two.Total_Marks)*100);
document.write("Name: Mr."+Student_Two.Student_Name);
document.write("<br />");
document.write("ID:"+Student_Two.Student_ID);
document.write("<br />");
document.write("Mr."+Student_Two.Student_Name+" Percentage is "+perStudent2);
document.write("<br />");
document.write("<br />");


if(perStudent1>perStudent2)
{
    document.write("Student Mr:"+Student_One.Student_Name+" is Eligible!");
}
else if(perStudent2<perStudent2)
{
    document.write("Student Mr."+Student_Two.Student_Name+" is Eligible!");
}
