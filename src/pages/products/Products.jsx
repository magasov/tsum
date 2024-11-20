import React from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://66ea9bdb55ad32cda479a3ae.mockapi.io/items/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.desc}</p>
      <h4>{product.price} ₽</h4>
    </div>
  );
};

export default Products;
