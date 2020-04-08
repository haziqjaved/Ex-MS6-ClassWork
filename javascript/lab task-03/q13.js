var t_name1=prompt("Enter Name of the Team:");
var t_score1=prompt("Enter 1st team Score:");
var t_name2=prompt("Enter Name of the Team:");
var t_score2=prompt("Enter 2nd team  Score:");
if(t_score1>t_score2)
{
    alert(t_name1+" has won the game");
}
else if(t_score1<t_score2)
{
    alert(t_name2+" has won the game");
}
else
{
    alert("There is a Tie");
}