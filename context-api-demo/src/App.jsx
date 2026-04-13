import { useContext } from "react";
import{ThemeContext,UserContext,LangContext} from './context';

const App=()=>{

  /*const {theme,toggleTheme}=useContext(ThemeContext);
  const {user,setUser}=useContext(UserContext);
  const {lang,setLang}=useContext(LangContext);*/

     const {state,dispatch}=useContext(ThemeContext);
    const {theme,user,lang}=state;

  return(
    <div style={{background:theme==="light"?"#fff":"#333"}}>
      <p>Theme:{theme}</p>
      <p>User:{user.name}</p>
      <p>Lang:{lang}</p>

      <button onClick={()=>dispatch({type:"TOGGLE_THEME"})}>ThemeChange</button>
      <button onClick={()=>dispatch({type:"USE_LANG"})}>en</button>
      <button onClick={()=>dispatch({type:"USE_LANG"})}>fr</button>



    </div>
  )
}

export default App;