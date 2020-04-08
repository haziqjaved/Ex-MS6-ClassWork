var alpha="Hello World"
var sel=prompt("Select any language to Translate "+alpha+ " 1.es 2.de 3.en");
if(sel==1)
{
    document.write("Hola Mundo");
}
else if(sel==2)
{
    document.write("Hallo Welt");
}
else if(sel==3)
{
    document.write("Hello World");
}
else 
{
    alert("Invalid! Please Select Correct Language");
}