import logo from "../assets/logo.png";
import "../styles/shippingDetails.css";
import { Link } from 'react-router-dom';

function shippingDetails() {
  return (
    <div>
      <div className="top">
        <img
          src={logo}
          style={{ height: "100px", width: "100px", marginLeft: "20px" }}
        />
        <p> Home </p>
        <p> <Link to = "/cart" style={{ textDecoration : "none"}}> Cart </Link></p>
      </div>
      <hr
        style={{ border: "none", borderTop: "3px solid black", width: "100%" }}
      />
      <div className="body">
        <div className="left">
          <h1> Shipping Information </h1>

          <div className="basicInfo">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>

          <div className="basicInfo">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div className="basicInfo">
            <label htmlFor="address">Address</label>
            <textarea rows="5" cols="5" id="address"></textarea>
          </div>
        </div>
        <div className="right">
            <h1> Order Summary </h1>
            <div className="productInfo">
            </div>
            <button> Confirm Order </button>
        </div>
      </div>
    </div>
  );
}

export default shippingDetails;
