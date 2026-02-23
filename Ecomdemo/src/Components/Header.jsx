export default function Header({cartCount})
{
    return(<div className="header">
        <h2> React Demo App</h2>
        <p>Cart Item Count:{cartCount}</p>
    </div>);
}