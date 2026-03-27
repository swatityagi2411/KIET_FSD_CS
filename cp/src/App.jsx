import {UserCard} from './UserCard';
import { Wrapper } from './Wrapper';

export default function App()
{
const users=[
  {
    name:"Virat Kohli",
    role:"BatsMan",
    country:"India",

  },
  {
    name:"Ms. Dhoni",
    role:"WK-Batsman",
    country:"India"
  }
];

function handleSelectUser(userName){
  alert(`You Selected ${userName}`)
}
return(<>
  <div>
  <h1>Cricket DashBoard</h1>
  </div>

  <Wrapper title="Team Member">
 { users.map((user,index)=>(
    <UserCard key={index} data={user} onSelect={handleSelectUser}/>
  ))
}
  </Wrapper>
  </>
)
}