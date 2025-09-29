import logo from '../assets/logo.png';
import '../styles/myCart.css'
import { useNavigate } from 'react-router-dom'



function MyCart(){

   const navigate = useNavigate();

    return(
        <div>
          <div className = "top"> 
             <img src = {logo}  style = {{ height:'100px', width : '100px', marginLeft: "20px" }}/>
             <p> Home </p>
             </div>
             <hr style = {{ border : 'none', borderTop : '3px solid black' }}/>
             <div className='products'>
                   <p> Products </p>
                   <p> Qty </p>
                   <p> Price </p>
             </div>
             <hr style = {{ border : 'none', borderTop : '3px solid black', width : "80%"}}/>
             <div className = "buttons">
               <hr style = {{ border : 'none', borderTop : '3px solid black', }}/>
                   <button onClick={ () => navigate("/shoppingDetails")} >
                      Continue Shopping
                   </button>
                   <button>
                      Checkout
                   </button>
             </div>
             </div>
    )
}



export default MyCart;