import React from "react";
import { Link } from "react-router-dom";

import "./basket.scss";
import CloseIcon from '@mui/icons-material/Close';

export default function Basket(){
    const [ basket, setBasket ] = React.useState(JSON.parse(localStorage.getItem("basket")) || []);
    function deleteFavourites(item){
        const newBasket = basket.filter(product => product != item);
        setBasket(newBasket);
        localStorage.setItem("basket", JSON.stringify(newBasket));
    }
    
    return(
        <div className="content">
            {
                !basket.length && <h1 style={{textAlign: "center"}}>Корзина пуста</h1>
            }
            <main className="favourite__main">
                {
                        (!basket.length) ? false : basket.map(items => (
                            <div className="product" key={items.id}>
                                <Link to={`/products/${items.id}`}>
                                    <img src={items.image} alt="images" />
                                </Link>
                                <h3>{items.title}</h3>
                                <p>{items.desc}</p>
                                <p>{items.quantity}</p>
                                <h4>{items.price} ₽</h4>
                                <CloseIcon className="cross" onClick={() => deleteFavourites(items)} />
                            </div>
                        ))
                    }
            </main>
        </div>
    )
}