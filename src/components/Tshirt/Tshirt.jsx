import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirts, handleAddedCart}) => {
    const{name, picture,price}= tshirts;
    
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddedCart(tshirts)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;