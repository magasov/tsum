import React from "react";
import { Link } from "react-router-dom";

import "./favourites.scss";

export default function Favourites(){
    const favouritesLocalArray = JSON.parse(localStorage.getItem("favourites")) || [];
    return(
        <main>
            {
                favouritesLocalArray.map(items => {
                    <div className="product" key={items.id}>
                        <Link to={`/products/${items.id}`}>
                            <img src={items.image} alt="images" />
                        </Link>
                        <h3>{items.title}</h3>
                        <p>{items.desc}</p>
                        <h4>{items.price} ₽</h4>
                    </div>
                })
            }
        </main>
    )
}