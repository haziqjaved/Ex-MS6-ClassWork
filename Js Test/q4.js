let obj = [
    {
    name : 'haziq',
    age : 20,
    student_ID : 421
    },
    {
    name : 'haris',
     age : 18,
     student_ID : 422
   },
   {
    name : 'mustafa',
     age : 25,
     student_ID : 423
   },
   {
    name : 'hammad',
     age : 33,
     student_ID : 434
   },
   {
    name : 'aryan',
     age : 31,
     student_ID : 435
   },
   {
    name : 'hassan',
     age : 30,
     student_ID : 436
   },
   {
    name : 'murtaza',
     age : 28,
     student_ID : 437
   },
   {
    name : 'hamza',
     age : 19,
     student_ID : 438
   },
   {
    name : 'ali',
     age : 32,
     student_ID : 439
   },
   {
    name : 'saad',
     age : 33,
     student_ID : 440
   }
];
let filStudent = obj.filter(x=> x.age< 30)
console.log(filStudent);

const filteredName = filStudent.map(data => {
  delete data.age;
  return data;
});
console.log(filteredName);