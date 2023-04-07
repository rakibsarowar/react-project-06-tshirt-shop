import React from 'react';
import Tshirt from '../Tshirt/Tshirt';

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h2>Order Summery: {cart.length}</h2>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                    >{tshirt.name}
                    <button
                    onClick={()=>handleRemoveFromCart(tshirt._id)}
                    >x</button></p>)
            }
        </div>
    );
};

export default Cart;