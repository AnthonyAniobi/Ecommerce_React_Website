import './App.css';

import React, { useState } from 'react'
import Header from './common/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pages from './pages/Pages';
import Data from './components/flashDeals/Data';

export default function App() {
    // step 1: fetch data from database

    const { productItems } = Data

    const [cartItem, setCardItem] = useState([])

    const addToCart = (product) => {
        const productExit = cartItem.find((item) => item.id === product.id)

        if (productExit) {
            setCardItem(cartItem.map((item) => (
                item.id === product.id ?
                    { ...productExit, qty: productExit.qty + 1 } : item
            )))
        }
    }

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
