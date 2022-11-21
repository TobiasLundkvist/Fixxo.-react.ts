import './App.css';
import React, { useState, useEffect } from 'react'
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
import { ProductContext, FeaturedProductsContext, TwoForProductsContext, ProductsRankContext, RelatedProductContext } from './contexts/contexts';

const App: React.FC = () => {
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [twoFor, setTwoFor] = useState([])
  const [productsRank, setProductsRank] = useState ([])
  const [realatedProduct, setRealatedProduct] = useState([])

  useEffect(() => {
  const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllProducts()

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedProducts()
    const fetchTwoForProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setTwoFor(await result.json())
    }
    fetchTwoForProducts()

    const fetchProductsRank = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=3')
      setProductsRank(await result.json())
    }
    fetchProductsRank()

    const fetchRealatedProduct = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setRealatedProduct(await result.json())
    }
    fetchRealatedProduct()
  }, [setProducts, setFeatured, setTwoFor, setProductsRank, setRealatedProduct])

  return (
    <BrowserRouter>
    <ProductContext.Provider value={products}>
    <FeaturedProductsContext.Provider value={featured}> 
    <TwoForProductsContext.Provider value={twoFor}>
      <ProductsRankContext.Provider value={productsRank}>
      <RelatedProductContext.Provider value={realatedProduct}>
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
      </RelatedProductContext.Provider>
      </ProductsRankContext.Provider>
      </TwoForProductsContext.Provider>
      </FeaturedProductsContext.Provider>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
