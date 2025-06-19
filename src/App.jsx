import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer'
import NavbarBootstrap from './components/NavbarBootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error from './components/Error'
import Nosotros from './components/Nosotros'
import Airsoft from './components/Airsoft'
import Cart from './components/Cart'
// import Checkout from './components/Checkout'
import { CartProvider } from './context/CartContext'
import CheckoutUseForm from './components/CheckoutUseForm'
import { Toaster, toast } from 'react-hot-toast'

function App() {

  return (
    <>
    <BrowserRouter>
      <CartProvider>
      <NavbarBootstrap />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="¡Bienvenidos a HIT Airsoft Bogotá!" />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estás en la categoría:" />}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/airsoft' element={<Airsoft/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckoutUseForm/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>
    <Toaster position="top-right" />
    </>
  )
}

export default App
