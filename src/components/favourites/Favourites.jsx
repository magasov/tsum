import React from "react";
import { Link } from "react-router-dom";

import "./favourites.scss";
import CloseIcon from '@mui/icons-material/Close';

export default function Favourites(){
    const [ fav, setFav ] = React.useState(JSON.parse(localStorage.getItem("favourites")) || []);
    function deleteFavourites(item){
        console.log(item);
        
        fav.splice(fav.indexOf(item), 1);
        localStorage.setItem("favourites", JSON.stringify(fav));
    }
    
    return(
        <div className="content">
            <main className="favourite__main">
                {
                        (fav.length) ? fav.map(items => (
                            <div className="product" key={items.id}>
                                <Link to={`/products/${items.id}`}>
                                    <img src={items.image} alt="images" />
                                </Link>
                                <h3>{items.title}</h3>
                                <p>{items.desc}</p>
                                <h4>{items.price} ₽</h4>
                                <CloseIcon className="cross" onClick={() => deleteFavourites(items)} />
                            </div>
                        )) : (<h1>Нету товарой</h1>)
                    }
            </main>
        </div>
    )
}