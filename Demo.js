
//console.log(a);
//let a=20;


/*let a=10;//number
let str="Hello";//string
let isok=true;//boolean
let arr=[1,2,3];//object
let obj={name:"Dennis",age:20};//object
let empty=null;//object
let b;//undefined

console.log(typeof a);
console.log(5==='5');

*/

//Call Back basic

function greet()
{
    console.log("Welcome");
}

function execute(fn)
{
    fn()
}
execute(greet());

//Map

const number=[1,2,3];
/*const newnumber=number.map(function(n){
    return n*2;
})*/

const newnumber=number.map(n=>n*2);//=><li>{n}</li>


console.log(newnumber);

//filter

const newnum=number.filter((n)=>n%2==0)

const n=[...number,5];