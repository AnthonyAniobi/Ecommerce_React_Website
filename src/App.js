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

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Pages productItems={productItems} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
