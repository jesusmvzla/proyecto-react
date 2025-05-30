import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer'
import NavbarBootstrap from './components/NavbarBootstrap'
import ItemCount from './components/ItemCount'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error from './components/Error'
import Nosotros from './components/Nosotros'
import Airsoft from './components/Airsoft'

function App() {

  return (
    <BrowserRouter>
      <NavbarBootstrap />

      <Routes>
        <Route path='/' element={<ItemListContainer greeting="¡Bienvenidos a HIT Airsoft Bogotá!" />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estás en la categoría:" />}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/airsoft' element={<Airsoft/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
