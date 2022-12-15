import React from 'react';

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