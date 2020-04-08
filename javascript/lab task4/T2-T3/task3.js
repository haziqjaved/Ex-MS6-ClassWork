var colorname=["green"," yellow"," blue"]
document.write(colorname);
var ask=prompt("what color you wants to add in the beginning:");
colorname.unshift(ask);
document.write("<br>");
document.write("<h4>"+"Update Array:"+"</h4>")
document.write(colorname);
var end=prompt("what color you wants to add in the End:");
colorname.push(end)
document.write("<br>");
document.write("<h4>"+"Update Array:"+"</h4>")
document.write(colorname);
var delFirst,delsec;
colorname.shift(delFirst)
document.write("<br>");
document.write("<h4>"+"Update Array:"+"</h4>")
document.write(colorname);
colorname.pop(delsec);
document.write("<h4>"+"Update Array:"+"</h4>")
document.write(colorname);
var indexAsk=prompt("which index You wants to add a color & color name:");
var ask1=prompt("which index You wants to add a color & color name:");
colorname.splice(indexAsk,0,ask1);
document.write("<h4>"+"Update Array:"+"</h4>");
document.write(colorname);
var delask=prompt("which index You wants to Delete a color & color name:");
var delLimit=prompt("From which index You wants to Delete a color & color name:");
colorname.splice(delask,);
document.write("<h4>"+"Update Array:"+"</h4>");
document.write(colorname);