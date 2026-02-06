function greet(name)
{
    console.log("Hello"+' '+name);
    console.log(`Hello ${name}`);
}

greet("User");


const factorial=function(n)
{
    if(n==0||n==1)
        return 1;
    else return n*factorial(n-1);
}

console.log(factorial(5));