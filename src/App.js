import './App.css';

import React from 'react'
import Header from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    {/* <Route path='' element={<Header />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}
