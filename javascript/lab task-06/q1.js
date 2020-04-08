var data = [
{
    country: 'China',
    population: 14095177
},
{
 country: 'India',
population: 13390127
},
{
country: 'USA',
population: 324459463},
    {
        country: 'Indonesia',
        population: 263991379   }
]
function check(pop)
{
 return pop.population >160000000;
}
console.log(data.filter(check));
