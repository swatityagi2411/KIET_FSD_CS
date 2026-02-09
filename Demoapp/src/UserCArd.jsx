export function UserCArd({user}){

    return(
        <div>
            <h3>User Name:{user.name}</h3>
            <p>Role:{user.role}</p>
            <p>Country:{user.country}</p>
        </div>
    );
}