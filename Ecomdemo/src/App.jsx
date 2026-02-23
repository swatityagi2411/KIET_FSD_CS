import {useState} from 'react';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import "./App.css"
export default function App()

{
const [cart,setCart]=useState([]);
const[totalAmt,setAmt] = useState(0);
const products=[
  {
    id:1,
    name:"Laptop",
    price:56000,
    image:""
  },
  {
    id:2,
    name:"Mobile",
    price:30000,
    image:""
  },{
    id:3,
    name:"Charger",
    price:1000,
    image:""
  }
];

function addToCart(product)
{
  setCart([...cart,product]);
  setAmt(totalAmt+product.price);
}

function removeFromCart(index)
{
const updatedCart=cart.filter((_,i)=>i!==index);
setCart(updatedCart)
}


  return(
    <div className='container'>
      <Header cartCount={cart.length}/>
      <ProductList products={products} addToCart={addToCart}/>
      <Cart totalAmt={totalAmt} cart={cart} removeFromCart={removeFromCart}/>
    </div>
  );

}