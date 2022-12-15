import React from 'react';
import './store-header.css'
import {Link} from "react-router-dom"

const StoreHeader = () => {
    return (
        <header className='store-header'>
            <Link className='logo text-dark'>
            <a href="#">Shop</a>
            </Link>
            <Link className='shopping-cart' to='/cart'>
                <i className='cart-icon bi bi-cart-fill'/>
                <a href="#">Items5</a>

            </Link>
        </header>
    );
};

export default StoreHeader;