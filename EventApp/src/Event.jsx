export default function EventToDo()
{   function handleClick(name){
    alert(`Button clicked by ${name}`);
}
    return(
        <div>
            <h1>Event Handling</h1>
            <button onClick={()=>handleClick("KIET")}>Click Me</button>
        </div>
    );

}