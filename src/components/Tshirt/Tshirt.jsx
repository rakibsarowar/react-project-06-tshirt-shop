import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirts}) => {
    const{name, picture,price}= tshirts;
    
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
        </div>
    );
};

export default Tshirt;