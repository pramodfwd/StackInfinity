import React from "react";

const Home = (props) => {

    return (
        <div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFWxHuUkaeCR3TPBXv15tiwk1CylmAQVSDQ&usqp=CAU"
                        alt=""
                    />
                </div>
                <div className="text-wraper item">
                    <span>I-Phone</span>
                    <br />
                    <span>price-$1200</span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={() =>
                        props.addToCartHandler({ price: 1000, name: 'I phone' })}
                    >Add to Cart</button>
                    <button onClick={() =>
                        props.removeToCartHandler({})}
                        className='bttn'>Remove From Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
