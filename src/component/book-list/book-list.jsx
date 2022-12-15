import React from 'react';
import BookListItem from "../book-list-item";
import withBookService from "../hoc";
import './book-list.css'


const BookList = (props) => {
    console.log(props)
    return (
        <ul className='book-list'>
            {props.service.getBooks().map(book => <li>
                <BookListItem {...book}/>
            </li>)
            }
        </ul>
    );
};

export default withBookService()(BookList);