import { useState } from "react";

export default function Theme()
{
    const [dark,setDark]=useState(false);
    const toggle=()=>{
        setDark(!dark);
    }

    return(
        <div style={{backgroundColor:dark?"black":"white",
            color:dark?"white":"black",
            height:"100vh"
        }}>
            <button onClick={toggle}>Change Theme</button>
        </div>
    )
}