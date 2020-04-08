var i=""
var arr = [
    {name: 'Asher', age: 22},
    {name: 'Zubair', age: 20},
    {name: 'Kashif', age: 23},
    {name: 'Wasif', age: 17},
    {name: 'Hanzala', age: 28}
    ]
function check(j){
if(j.name.includes('f') && j.age>18)
{
    i+=j.name+" ";
}
}
console.log(arr.filter(check)); 
console.log(i);