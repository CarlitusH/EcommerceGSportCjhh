import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/items/ItemListContainer';
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom";

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  
  const opciones = [
    {id:1, opcion:"Home", link:"/"},
    {id:2, opcion:"Hombre", link:"/category/men's clothing"},
    {id:3, opcion:"Mujer", link:"/category/jewelery"},
    {id:4, opcion:"Accesorios", link:"/category/electronics"},
    {id:5, opcion:"Otros", link:"/category/women's clothing"}
  ];


  return (
    <div>
      <BrowserRouter>
        <NavBar opciones={opciones} />

        <Routes>
          <Route path='/' element={<ItemListContainer />} /> 
          <Route path='/category/:categoryId' element={<ItemListContainer />} /> 
          <Route path='/item/:itemId' element={<ItemDetailContainer />} /> 
        </Routes>

      </BrowserRouter>
    </div>
  )
}