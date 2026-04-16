import { useContext } from "react";
import{ GlobalContext} from './context';

const App=()=>{

  /*const {theme,toggleTheme}=useContext(ThemeContext);
  const {user,setUser}=useContext(UserContext);
  const {lang,setLang}=useContext(LangContext);*/

     const {state,dispatch}=useContext(GlobalContext);
    const {theme,user,lang}=state;

  return(
    <div style={{background:theme==="light"?"#fff":"#333"}}>
      <p>Theme:{theme}</p>
      <p>User:{user.name}</p>
      <p>Lang:{lang}</p>

      <button onClick={()=>dispatch({type:"TOGGLE_THEME"})}>ThemeChange</button>
      <button onClick={() => dispatch({ type: "SET_LANG", payload: "en" })}>
  en
</button>
      <button onClick={() => dispatch({ type: "SET_LANG", payload: "fr" })}>
  fr
</button>



    </div>
  )
}

export default App;