export function Product({data}){
    return(
<div>
<h4>Name:{data.name}</h4>
<p>Desc:{data.desc}</p>
<p>Price:{data.price}</p>
</div>
    );
}