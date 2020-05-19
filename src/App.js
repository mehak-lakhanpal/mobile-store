import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Cart from './components/Cart';
import Navbar from './components/NavBar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter>
    <div className="App">
      <Navbar/>
        <Switch>
            <Route exact path="/" component={ProductList}/>
            <Route path='/products/:id' component={Product}/>
            <Route path="/cart" component={Cart}/>
          </Switch>
     </div>
  </BrowserRouter>
  </AuthContextProvider>
  );
}

export default App;
