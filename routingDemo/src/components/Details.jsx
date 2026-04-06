import {useParams} from "react-router-dom"

function Details()
{
    const {id}=useParams();

    return(
        <div>
            <h1>details Page:</h1>
            <h2>You Clicked item:{id}</h2>
        </div>
    )

}
export default Details;