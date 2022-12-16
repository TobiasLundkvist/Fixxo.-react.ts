import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import CompareView from './views/CompareView';
import ContactView from './views/ContactView';
import ProductView from './views/ProductView';
import ProductDetailsView from './views/ProductDetailsView';
import NotFoundView from './views/NotFoundView';
import SearchView from './views/SearchView';
import ShoppingCartView from './views/ShoppingCartView';
import WishListView from './views/WishListView';
import ProductProvider from './contexts/productContext';
import { ShoppingCartProvider } from './contexts/shoppingCartContext';
import ManageProductView from './views/ManageProductView';
import ManageProductProvider from './contexts/manageProductContext';
import UpdateProductView from './views/UpdateProductView';
import RegisterProvider from './contexts/signUpInContext';
import SignUpInView from './views/SignUpInView';
import RegisterView from './views/RegisterView';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <ProductProvider>
      <ShoppingCartProvider>
      <ManageProductProvider>
      <RegisterProvider>
      <Routes>
        <Route path='/' element={<HomeView />} /> 
        <Route path='/contacts' element={<ContactView />} />
        <Route path='/categories' element={<CategoriesView />} />
        <Route path='/compare' element={<CompareView />} />
        <Route path='/product' element={<ProductView />} />
        <Route path='/product/:id' element= {<ProductDetailsView />} />
        <Route path='/search' element= {<SearchView />} />
        <Route path='/shoppingcart' element= {<ShoppingCartView />} />
        <Route path='/wishlist' element= {<WishListView />} />
        <Route path='/manage' element= {<ManageProductView />} />
        <Route path='/update/:id' element= {<UpdateProductView />} />
        <Route path='/signupin' element= {<SignUpInView />} />
        <Route path='/register' element= {<RegisterView />} />


        <Route path='*' element={<NotFoundView />}/>
      </Routes>
      </RegisterProvider>
      </ManageProductProvider>
      </ShoppingCartProvider>
      </ProductProvider>  
    </BrowserRouter>
  );
}

export default App;
