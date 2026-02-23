export default function Cart({totalAmt,cart,removeFromCart})
{
    return(
        <div className="cart">
            <h2>Your cart : </h2>
             {cart.map((item,index)=>(
                <div key={index} className="cart-item">
                    <img src={item.image} alt={item.name}/>
                    <span>{item.name}-{item.price}</span>
                    <button onClick={()=>removeFromCart(index)}>
                    Remove</button>
                    </div>
             ))}
        
            <h3>total cart amount: {totalAmt}</h3>
        </div>
    )
}