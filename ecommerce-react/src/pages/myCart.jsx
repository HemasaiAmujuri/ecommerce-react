import logo from '../assets/logo.png';
import '../styles/myCart.css'



function myCart(){

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
             <div className = "buttons">
                   <button>
                      Continue Shopping
                   </button>
                   <button>
                      Checkout
                   </button>
             </div>
             </div>
    )
}



export default myCart;