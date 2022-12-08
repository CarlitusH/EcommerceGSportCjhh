import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import callApi from "../generics/callApi";


export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    const {categoryId} = useParams();

    const listarProductosTodos = ()=>{
        const url = "https://fakestoreapi.com/products?limit=16";
            callApi(url)
                .then(({data, status})=>{
                    categoryId?setProductos(data.filter(objCategory=>objCategory.category===categoryId)): setProductos(data);
                })
                .catch(error=>console.error(error))
    }

    useEffect(() => {
        listarProductosTodos();
        return () => {
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryId])
    

  return (
    <>
        <div className="bg-dark d-flex justify-content-center align-items-center h-100 min-vh-100">
            <div className="container mt-5 mb-3">
                <div className="row gy-3 mt-5 mb-3">
                    {productos.map(({title, category, image, id},index)=>{
                        return  <div className="col-lg-3 col-md-6" key={index}>
                                    <div className="box bg-dark bg-gradient h-100 d-flex p-4 flex-column text-white">
                                        <img src={image} alt="Foldsack No. 1 Backpack" className="card-img-top bg-secondary h-50"/>
                                        <h2 className="mt-3">Product-{id}</h2>
                                        <div className="overflow-auto text-left" style={{minWidth: "10rem"}}>
                                            {title}
                                        </div>
                                        <div className="overflow-auto text-left mt-2" style={{minWidth: "10rem"}}>
                                            <span className="text-danger">Category: </span> {category}
                                        </div>
                                        <a href={"/item/"+id} className="btn mt-auto btn-outline-light">Ver Detalle</a>
                                    </div>
                                </div>
                        })
                    }
                </div>
            </div>
        </div>
    </>
  )
}