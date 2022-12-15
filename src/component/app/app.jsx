import React from 'react';
import ErrorBoundary from "../error-boundary";
import {Provider} from "react-redux";
import {BooksServiceProvider} from "../../service-context/book-service-context";
import BookService from "../../services/book-service";
import store from "../../store";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import StoreHeader from "../store-header";
import BookListItem from "../book-list-item/book-list-item";
import StoreCartTable from "../store-cart-table";



const service = new BookService()


const App = () => {
    return (
        <Provider store={store}>
           <ErrorBoundary>
             <BooksServiceProvider value={service}>
                <BrowserRouter>
                   <StoreHeader/>
                    <Switch>
                        <Route path='test' exact component={BookListItem}/>
                        <Route path='/cart'component={StoreCartTable}/>
                    </Switch>
                </BrowserRouter>
             </BooksServiceProvider>
           </ErrorBoundary>
        </Provider>
    );
};

export default App;