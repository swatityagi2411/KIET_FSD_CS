/*console.log("Begin");
console.log("Data Initiated");
console.log("End");*/

/*console.log("Begin");
setTimeout(()=>{console.log("Data Initiated"),2000});
console.log("End");*/

/*function getdata(callback)
{
    setTimeout(()=>{console.log("data initiated");},2000);
}

getdata(function(result)
{console.log(result);}
)

*/

let Promise=new Promise((resolve,reject)=>{
let success=true;

if(success)
{
    resolve("Data Connected");

}
else{
    reject("error in Connection");
}
})

//consuming promise

axios.get("https://jsonplaceholder.typicode.com/users")
.then(res=>setuser(res.data))
.catch(error=>console.log(error))

//npm install axios
//import axios from 'axios'