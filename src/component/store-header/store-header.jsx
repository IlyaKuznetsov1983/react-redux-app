import React from 'react';
import 'store-header.css'


const StoreHeader = () => {
    return (
        <header className='store-header'>
            <div className='logo text-dark'>
            <a href="#">Shop</a>
            </div>
            <div className='shopping-cart'>
                <i className='cart-icon bi bi-cart-fill'/>
                <a href="#">Items5</a>

            </div>
        </header>
    );
};

export default StoreHeader;