import { UserCArd } from "./UserCArd"
import { Wrapper } from "./Wrapper"

export default function App() {
const users=[
  {
    name:"Virat Kohli",
    role:"BatsMaan",
    country:"India",
    
  },
  {
    name:"Ms. Dhoni",
    role:"WK-Batsman",
    country:"India"
  }
]

  return(
    <>
    <h1>Users Dashboard</h1>
    <Wrapper title="Users List">
   {
    users.map((use,index)=>(<UserCArd key={index} user={use}/>))
   }
      
    </Wrapper>
    </>
  )
}