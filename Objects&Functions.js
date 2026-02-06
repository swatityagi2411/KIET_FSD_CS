//const obj={name:"Dennis"}
//console.log(obj.name);
//obj.name="ritchie";
//console.log(obj.name);

const sales="Toyota";
function Types(name){
    return name==="Honda"?name:"Sorry";
}


const car={mycar:"saturn",getCar:Types("Honda"),special:sales};//object cpossess with key value pair in which value can be directly available or it can be via function call or variable call
console.log(car.mycar);
console.log(car.getCar);
console.log(car.special);

const student={name:"Rom",age:21,hobby:"Cricket"};
for(const key in student){
    console.log(key,student[key]);
}

const fruits=["Apple","Banana","Litchi"];
for(const fruit of fruits)
{
    console.log(fruit);
}

for(const char of "JavaScript")
{
    console.log(char);
}
const colors=["Red","Yellow","Blue"];

for(const[index,color] of colors.enteries())
{
    console.log(index,color);
}