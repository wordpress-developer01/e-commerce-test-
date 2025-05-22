import React, {useState} from 'react';
import { ReactComponent as CartIcon } from '../img/shopping_cart.svg';
import Orders from "./Orders";


export default function Header(props) {
    let [cart, setCart] = useState(false);

    return (
        <header className="header">
            <div>
                <span className='logo'>Hose Staff</span>
                <ul className="nav">
                    <CartIcon onClick={() => setCart(cart = !cart)} className={`cart-icon ${cart && 'active'}`} />
                    <li>About Us</li>
                    <li>Contacts</li>
                    <li>Profile</li>

                    {cart && (
                        <div className="cart">
                            {props.orders.map(el => (
                                <Orders key={el.id} item={el} />
                            ))}
                        </div>
                    )}
                </ul>



            </div>
            <div className='presentation'></div>
        </header>
    )
}