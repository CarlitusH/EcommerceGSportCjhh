import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import callApi from "../generics/callApi";

import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [dataProducto, setDataProducto] = useState({});


  const listarProductoPorId = () => {
    const url = "https://fakestoreapi.com/products?limit=16";
    callApi(url)
      .then(({ data, status }) => {
        setDataProducto(data.find((objProducto) => objProducto.id === +itemId));
      })
      .catch((error) => console.error(error));
  };

  useEffect(()=>{
    listarProductoPorId();
    
    return () => {
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return( 
    <div className="appDetailProduct">

      <div className="detailsBodyProduct">
        <div className="imgProduct">
            <img src={dataProducto.image} alt="Imagen Producto" />  
        </div>
        <div className="contenidoProduct">
          <div className="row">
            <h2>{dataProducto.title}</h2>
            <h3>Precio: <span className="text-danger">S/. {dataProducto.price}</span></h3>
          </div>
          <p>{dataProducto.description}</p>

          <button className="btn btn-outline-success">Agregar al Carrito</button>
        </div>
      </div>
    </div>
  )
};
