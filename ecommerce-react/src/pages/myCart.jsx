import logo from "../assets/logo.png";
import "../styles/myCart.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function MyCart() {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  const handleIncrement = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 1) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: prev[productId] > 1 ? prev[productId] - 1 : 1,
    }));
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="top">
        <img
          src={logo}
          style={{ height: "100px", width: "100px", marginLeft: "20px" }}
        />
        <p> Home </p>
      </div>
      <hr style={{ border: "none", borderTop: "3px solid black" }} />
      <div className="products">
        <p> Products </p>
        <p> Qty </p>
        <p> Price </p>
      </div>
      <hr
        style={{ border: "none", borderTop: "3px solid black", width: "80%" }}
      />
      <div className="products-container">
        <div className="products-container">
          {products.map((product) => {
            const quantity = quantities[product.id] || 1;

            return (
              <div key={product.id} className="products-list">
                <div className="product-info">
                  <img
                    src={product.image}
                    alt="product image"
                    height="100px"
                    width="100px"
                  />
                  <p className="title">{product.title}</p>
                </div>
                <div className="product-count">
                  <button
                    className="quantity"
                    onClick={() => handleDecrement(product.id)}
                  >-
                  </button>
                  <div className="quantity-value"> {quantity} </div>
                  <button
                    className="quantity"
                    onClick={() => handleIncrement(product.id)}
                  >+
                  </button>
                </div>
                <p>{Math.round(product.price * quantity)}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="buttons">
        <hr style={{ border: "none", borderTop: "3px solid black" }} />
        <button>Continue Shopping</button>
        <button onClick={() => navigate("/shoppingDetails")}>Checkout</button>
      </div>
    </div>
  );
}

export default MyCart;
