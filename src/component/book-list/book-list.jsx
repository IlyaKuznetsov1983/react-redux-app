import React from 'react';
import BookListItem from "../book-list-item";

const BookList = () => {
    return (
        <ul className='book-list'>
            {
                {[].map(book => {
                        return (<li>
                            <BookListItem/>
                        </li>)
                    }

        </ul>
    );
};

export default BookList;