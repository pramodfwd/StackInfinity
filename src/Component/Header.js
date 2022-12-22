import React from "react";

const Header = (props) => {
    console.log("home", props.data)
    return (
        <div>
            <div className="add-to-cart">
                <span>{props.data.length}</span>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/126/126083.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Header;
