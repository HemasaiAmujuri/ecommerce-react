import logo from "../assets/logo.png";
import "../styles/myCart.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function MyCart() {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [total, setTotal] = useState(0);



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

useEffect(() => {
  const totalPrice = () => {
    return products.reduce((total, product) => {
      const quantity = quantities[product.id] || 1;
      return total + product.price * quantity;
    }, 0);
  };

  setTotal(totalPrice());
}, [products, quantities]);


   

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
      <div className="sticky-postion">
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
        <p className="heading-qty"> Qty </p>
        <p className="heading-price" > Price </p>
      </div>
      <hr
        style={{ border: "none", borderTop: "3px solid black", width: "95%" }}
      />
      </div>
        <div className="products-container">
        <div className="products-container">
          {products.map((product) => {
            const quantity = quantities[product.id] || 1;

            return (
              <div key={product.id} className="products-list">
                <div className="product-info">
                  <div className="product-image">
                    <img
                      src={product.image}
                      alt="product image"
                      height="150px"
                      width="150px"
                    />
                  </div>
                  <p className="title">{product.title}</p>
                </div>
                <div className="product-count">
                  <button
                    className="quantity"
                    onClick={() => handleDecrement(product.id)}
                  >
                    -
                  </button>
                  <div className="quantity-value"> {quantity} </div>
                  <button
                    className="quantity"
                    onClick={() => handleIncrement(product.id)}
                  >
                    +
                  </button>
                </div>
                <p>&#8377;{Math.round(product.price * quantity)}</p>
              </div>
            );
          })}
        </div>
      </div>
        <div>
          <hr
        style={{ border: "none", borderTop: "3px solid black", width: "95%" }}
      />
        <p className="total">Total: &#8377;{Math.round(total)}</p>
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
