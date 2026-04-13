import {useState} from 'react';
import{ThemeContext,UserContext,LangContext} from './context';

const Appprovider=({children})=>{
    const [theme,setTheme]=useState("light");
    const [user,setUser]=useState({name:"guest"})
    const [lang,setLang]=useState("en");

    const toggleTheme=()=>
    {
        setTheme(prev=> prev==="light"?"dark":"light");
    }
return(
<ThemeContext.Provider value={{theme,toggleTheme}}>
    <UserContext.Provider value={{user,setUser}}>
        <LangContext.Provider value={{lang,setLang}}>
            {children}
        </LangContext.Provider>

    </UserContext.Provider>
</ThemeContext.Provider>
)
}

export default Appprovider;