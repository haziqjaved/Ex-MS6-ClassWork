var str="the quick brown fox"
function CapitalizeFirst(str)
{
    var arr = str.split(' ');
    var newArr=[];
    for(i=0;i<arr.length;i++){
        newArr.push(arr[i].charAt(0).toUpperCase()+ arr[i].slice(1));
    }
return newArr.join(' ');
}
document.write(CapitalizeFirst(str));