function CelsiusToFarhenit(c)
{
    var cnv=c*9/5+32;
    var msg =c+' C is '+cnv+' F.'+'<br/>';
    document.write(msg)
}
function FarhenitToCelsius(f)
{
     var cnv=(f-32)*5/9;
     var msg=f+' F is '+cnv+'C.'+'<br/>';
    document.write(msg);
}
CelsiusToFarhenit(60);
FarhenitToCelsius(45);