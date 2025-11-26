import { useEffect } from "react"

export default function Cart({cart, setCart}) {

    return(
        <div className="cart-group">
            {cart.length > 1 ? (
                <ul className="cart-list">
                    {cart.map(item => (
                        <li>{item.title}</li>
                    ))}
                </ul>
            ) : (<p>No products added, load page again.</p>)}
        </div>
    )}   