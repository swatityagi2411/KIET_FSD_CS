const person={key:"Hello"};
console.log(person.key);
person.key="Bye";
console.log(person.key);

const arr=["HTML","CSS","JavaScript"];
console.log(arr);
arr.push("Python");
console.log(arr);


const Sales="Toyota";

function carType(name)
{
    return name==="Honda"?name:"Sorry we dont sell this car";
}

const car={ carn:"City",getCar:carType("Honda"),Special:Sales}

console.log(car.carn);
console.log(car.getCar);
console.log(car.Special);


const color=["Red","Black","White"];

color.forEach((i)=>console.log(i));


for(const i in color)
{
    console.log(i);
}

//const user={name:"Rabins",age:25,Hobby:"Coding"};
//for(const index in user)
//{
  //  console.log(index,user[index]);
//}


//const language=["HTML","CSS","Javascript"]
for(const i of color)
{
    console.log(i);
}