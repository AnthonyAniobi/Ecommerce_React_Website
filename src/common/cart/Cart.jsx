import React from 'react'

const Cart = ({ cartItem, addToCart }) => {
    return (
        <>
            <section className="cart-items">
                <div className="container d_flex">
                    <div className="cart-details">
                        {CanvasCaptureMediaStreamTrack.length === 0 &&
                            <h1 className="no-items product">No Items are added in Cart</h1>
                        }
                        {cartItem.map((item) => {
                            const productQty = item.price * item.qty
                            return (
                                <div className="cart-list product d_flex">
                                    <div className="img">
                                        <img src={item.cover} alt="" />
                                    </div>
                                    <div className="cart-details">
                                        <h3>{item.name}</h3>
                                        <h4>
                                            {item.price}.00 {item.qty}
                                            <span>${productQty}.00</span>
                                        </h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart