import React from 'react'
import Home from '../components/MainPage/Home'
import FlashDeals from '../components/flashDeals/FlashDeals'
import TopCate from '../components/top/TopCate'

const Pages = ({ productItems, addToCart }) => {
    return (
        <>
            <Home />
            <FlashDeals productItems={productItems} addToCart={addToCart} />
            <TopCate />
        </>
    )
}

export default Pages