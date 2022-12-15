import React from 'react';
import 'book-list-item.css'


const BookListItem = () => {
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src="http://s1.livelib.ru/boocover/.................." alt="img"/>
            </div>

            <div className="book-details">
                <p className="book-title">title</p>
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