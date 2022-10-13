import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ItemListContainer from './components/Pages/ItemListContainer/itemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/Pages/ItemDetailContainer/ItemDetailContainer'
import CarritoPage from './components/Pages/CarritoPage/CarritoPage'
import { NotFound404 } from './components/NotFound404/NotFound404'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './context/cartContext'

function App() {
    
    return (
        <div>
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar />
                    
                    <Routes>     
                        <Route path='/'  element={<ItemListContainer />} />  
                        
                        <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />    
                        <Route path='/detalle/:idProducto'  element={<ItemDetailContainer />} />      
                        <Route path='/cart'  element={<CarritoPage />} /> 
                        <Route path='/404'  element={<NotFound404 />} />                    
                        
                        <Route path='*' element={ <Navigate to='/404' />} />
                    </Routes>            
                </BrowserRouter>
            </CartContextProvider>
        </div>
    )
}

export default App