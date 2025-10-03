import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/productlists.css";
import { useState, useEffect } from "react";

function ProductLists() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=194", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  });
  return (
    <div className="screen">
      <div className="top">
        <img
          src={logo}
          style={{ height: "100px", width: "100px", marginLeft: "20px" }}
        />
        <p>
          <Link to="/CART" style={{ textDecoration: "none" }}>
            Cart
          </Link>
        </p>
      </div>
      <hr style={{ border: "none", borderTop: "3px solid black" }} />
      <div className="search-bar">
        <input type="text" id="searchBar" />
      </div>
      <div className="products-container">
        {products.map((product) => {
          return (
            <div key={product.id} className="products-list">
              <div className="product-info">
                <div className="product-image">
                  <img
                    src={product.images[0]}
                    alt="product-image"
                    height="200px"
                    width="200px"
                  />
                  <div className="meta-data">
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <button> Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductLists;
