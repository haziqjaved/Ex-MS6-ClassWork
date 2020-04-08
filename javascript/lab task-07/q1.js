var aaj= new Date();
var day= aaj.getDay()
var weekDays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
document.write("Today is:"+weekDays[day]);
var hrs= aaj.getHours();
var min=aaj.getMinutes();
var sec=aaj.getSeconds();
document.write("<br />");
document.write("Current Time is:"+hrs+" hours: "+min+" minutes: "+sec+" seconds");