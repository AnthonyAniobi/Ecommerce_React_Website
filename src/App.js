import './App.css';

import React, { useState } from 'react'
import Header from './common/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pages from './pages/Pages';
import Data from './components/flashDeals/Data';
import Cart from './common/cart/Cart';
import Sdata from './components/MainPage/Sdata';
import Footer from './common/footer/Footer';

export default function App() {
    // step 1: fetch data from database

    const { productItems } = Data

    const { shopItems } = Sdata

    const [cartItem, setCartItem] = useState([])

    const addToCart = (product) => {
        const productExit = cartItem.find((item) => item.id === product.id)

        if (productExit) {
            setCartItem(cartItem.map((item) => (
                item.id === product.id ?
                    { ...productExit, qty: productExit.qty + 1 } : item
            )))
        } else {
            setCartItem([...cartItem, { ...product, qty: 1 }])
        }
    }

    const decreaseQty = (product) => {
        const productExit = cartItem.find((item) => item.id === product.id)
        if (productExit.qty === 1) {
            setCartItem(cartItem.filter((item) => item.id !== product.id))
        } else {
            setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
        }
    }


    return (
        <>
            <BrowserRouter>
                <Header cartItem={cartItem} />
                <Routes>
                    <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
                    <Route path='/cart' element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
