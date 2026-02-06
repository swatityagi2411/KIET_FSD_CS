//let arr=[1,2,3];
//arr.forEach((element)=>console.log(element));


function greet(name){
    console.log("hello"+name);
    console.log(`hello ${name}`)
}


greet("KIETians");

function add(a,b)
{
    return a+b;
}

console.log(add(2,3));

let c=add(2,3);
console.log(c);

const factorial=function(n)
{
    if(n==1||n==0)
        return 1;
    else return n*factorial(n-1);
}

console.log(factorial(5));