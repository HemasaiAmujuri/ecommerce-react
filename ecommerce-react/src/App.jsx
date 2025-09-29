import Mycart from '../src/pages/myCart'
import ShippinDetails from '../src/pages/shippingDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Mycart />} />
        <Route path='/shoppingDetails' element={<ShippinDetails />} />
      </Routes>
    </Router>
  )
}


export default App;