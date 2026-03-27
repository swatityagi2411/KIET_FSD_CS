export function UserCArd({data}){
    return(
<div>
<h4>Name:{data.name}</h4>
<p>Role:{data.role}</p>
<p>Country:{data.country}</p>
</div>
    );
}