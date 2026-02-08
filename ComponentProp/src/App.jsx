import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {

const y=[2024,2025,2026];
const c={name:"KIET",location:"Ghaziabad",estdyear:1998};
  return (
    <>
      <Header title="My First React App"/>
      <Header title="Lets Explore FSD Together" />

      <Footer year={y} company={c}/>
    </>
  )
}

export default App
