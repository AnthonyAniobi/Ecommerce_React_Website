import React from 'react'

const Head = () => {
    return (
        <>
            <section className="head">
                <div className="container d_flex">
                    <div className="left row">
                        <i className="fa fa-phone"></i>
                        <label htmlFor=''>+888012 3457 7894</label>
                        <i className="fa fa-envelope"></i>
                        <label htmlFor="">example@gmail.com</label>
                    </div>
                    <div className="right row RText">
                        <label htmlFor="">Theme FAQ's</label>
                        <label htmlFor="">Need Helps</label>
                        <span>🇳🇬</span>
                        <label htmlFor="">NG</label>
                        <span>🇺🇲</span>
                        <label htmlFor="">USA</label>
                        <label htmlFor="">USD</label>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Head