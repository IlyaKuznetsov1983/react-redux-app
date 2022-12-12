import React from 'react';
import ErrorBoundary from "../error-boundary";
import {Provider} from "react-redux";
import {BooksServiceProvider} from "../../service-context/book-service-context";
import BookService from "../../services/book-service";
import store from "../../store";
import {BrowserRouter} from "react-router-dom";


const service = new BookService()


const App = () => {
    return (
        <Provider store={store}>
           <ErrorBoundary>
            <BooksServiceProvider value={service}>
                <BrowserRouter>
                   <div>App</div>
                </BrowserRouter>
            </BooksServiceProvider>
           </ErrorBoundary>
        </Provider>
    );
};

export default App;