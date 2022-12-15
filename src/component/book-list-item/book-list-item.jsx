import React from 'react';
import './book-list-item.css'


const BookListItem = (props) => {
    console.log(props)
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={props.coverImage}/>
            </div>

            <div className="book-details">
                <p className="book-title">{props.title}</p>
                <p className="book-author">author</p>
                <p className="book-price">$10</p>
                <button className="btn btn-primary add-to-cart">
                    Add
                </button>

            </div>
        </div>
    );
};

export default BookListItem;