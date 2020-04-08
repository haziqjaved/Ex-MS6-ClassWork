var sec_num= 8;
var guess =prompt("Guess the Secret Number:");
if(guess==sec_num){
    alert("Bingo! Correct answer");
}
else if(guess-1==sec_num || guess+1==sec_num)
{
    alert("Close enough to the correct answer");
}
else
{
    alert("Try Again");
}
