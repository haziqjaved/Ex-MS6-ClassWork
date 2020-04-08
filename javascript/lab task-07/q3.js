var num=Math.ceil(Math.random()*10);
var guessNum= prompt("Guess the number between 1 and 10 inclusive:");
if(guessNum==num){
    alert("Good Work");
}
else
{
    alert("Not Matched");
}