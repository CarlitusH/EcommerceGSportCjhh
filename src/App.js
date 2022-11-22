import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/items/ItemListContainer';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  
  const opciones = [
    {id:1, opcion:"Home"},
    {id:2, opcion:"Hombre"},
    {id:3, opcion:"Mujer"},
    {id:4, opcion:"Accesorios"},
    {id:5, opcion:"Ventas"}
  ];


  return (
    <div>
        <NavBar opciones={opciones}/>
        <ItemListContainer />
    </div>
  )
}