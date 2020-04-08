function Cylinder(height,diameter)
{
    this.diameter=diameter;
    this.height=height;
    radius= diameter/2;
    var V= Math.PI*Math.pow(radius,2)*height;
}
document.write("The Volume is"+V);
var inp=prompt("Enter height:"+height);
var inp1=prompt("Enter Diameter:"+diameter);