//Write a JavaScript function which accepts an argument and returns the type.
//Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

var  string="Pakistan"
var num=92, boolean=true;
var obj={name:"JAved"};
var y;
fun(string);
fun(num);
fun(obj);
fun(y);
fun(fun);
fun(boolean);
function fun(i)
{
    return alert(typeof i);
}
