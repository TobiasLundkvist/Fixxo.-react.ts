import './App.css';
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

const App: React.FC = () => {

  return (
    <BrowserRouter>
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

        <Route path='*' element={<NotFoundView />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
