var arr = [
    {name: 'Asher', age: 22},
    {name: 'Zubair', age: 20},
    {name: 'Kashif', age: 23},
    {name: 'Wasif', age: 17},
    {name: 'Hanzala', age: 28}
    ]
   // var a =arr.splice(3,1,{name:'umair',age:23});
   var x=arr.push({name:'umair',age:19});
    var b=arr.shift();
    var d=new Date();
    for(i=0;i<arr.length;i++)
    {
        arr[i].createdAt=d;
    }
console.log(arr);

