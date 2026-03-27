export function UserCard({data})
{
    return(
<>
<h3>{data.name}</h3>
<p>Role:{data.role}</p>
<p>Country:{data.country}</p>
<button onClick={()=> onSelect(data.name)}>Select User</button>
</>
    );
}