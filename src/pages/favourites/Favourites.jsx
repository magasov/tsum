import React from "react";
import { Link } from "react-router-dom";

import "./favourites.scss";
import CloseIcon from '@mui/icons-material/Close';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Favourites(){
    const [ fav, setFav ] = React.useState(JSON.parse(localStorage.getItem("favourites")) || []);
    function deleteFavourites(item){
        const newFav = fav.filter(product => product != item);
        setFav(newFav);
        localStorage.setItem("favourites", JSON.stringify(newFav));
    }
    
    return(
        <div>
            <Header />
            <div className=".content-favourites">
                {
                    !fav.length && <h1 style={{textAlign: "center"}}>Нету товаров</h1>
                }
                <main className="favourite__main">
                    
                    {
                            (!fav.length) ? false : fav.map(items => (
                                <div className="product" key={items.id}>
                                    <Link to={`/products/${items.id}`}>
                                        <img src={items.image} alt="images" />
                                    </Link>
                                    <h3>{items.title}</h3>
                                    <p>{items.desc}</p>
                                    <h4>{items.price} ₽</h4>
                                    <CloseIcon className="cross" onClick={() => deleteFavourites(items)} />
                                </div>
                            ))
                            
                        }
                </main>
            </div>
            <Footer />
        </div>
    )
}