//Write a JavaScript program to get the filename from user with extension & return the 
//extension.
var fileName=prompt("Enter your File name with extension");
var extension=fileName.split('.').pop();
alert(extension);