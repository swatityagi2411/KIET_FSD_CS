import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {

const y=[2024,2025,2026];
const c={name:"KIET",location:"Ghaziabad",estdyear:1998};
  return (
    <>
      <Header title="My First React App" color="red" year="2009"/>
      <Header title="Lets Explore FSD Together"/>
     
     <card>
      <h4>This is Children Demo</h4>
      <p>This Demo talks about passing children prop</p>
      <p>Thanks fo reading</p>
     </card>
      

      <Footer year={y} company={c}/>
    </>
  )
}

export default App
