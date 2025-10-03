import Mycart from '../src/pages/myCart'
import ShippinDetails from '../src/pages/shippingDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Productlist from '../src/pages/productlists'


function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Mycart />} />
        <Route path='/shoppingDetails' element={<ShippinDetails />} />
        <Route path='/cart' element={<Mycart />} />
        <Route path='/home' element={< Productlist/>} />
      </Routes>
    </Router>
  )
}


export default App;