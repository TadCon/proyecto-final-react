import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

import ItemList from "../../ItemList/ItemList"
import Titulo from "../../Titulo/Titulo"



const Loading = () => {    
    return <h2>Cargando...</h2>
} 
 
const ItemListContainer = ( {greeting} ) => {
    const [ productos, setProductos ] = useState([])   
    const [ loading, setLoading ] = useState(true)
    const { idCategoria } = useParams()
    
    /**
     * If there's an idCategoria, then query the collection with the idCategoria, otherwise query the
     * collection without the idCategoria.
     */
        const traerProductos = () => {
            const db = getFirestore()
            const queryCollection = collection(db, 'productos')
            const queryFiltrada = idCategoria ? query(queryCollection, where('categoria', '==', idCategoria))  
                : queryCollection               
            getDocs(queryFiltrada)
            .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ))) 
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }

    useEffect(() => {
        traerProductos()
    },[idCategoria])    

    return (
        <div className="container">
           <Titulo titulo={'Productos por categoría'} />
            <p>{greeting}</p>             

            { loading ? 
                    <Loading />
                :
                    <>
                        <ItemList productos={productos} /> 
                    </>
            }
        </div>
    )
}

export default ItemListContainer



/* APUNTES */
/*
//Traer productos filtrados
useEffect (() => {
  const db = getFirestore()
  const queryCollection = collection(db, 'productos')

  const queryFilter = query(queryCollection, where('price', '>', 990))

  getDocs(queryFilter)
  .then(res => setProductos(res.docs.map(prod => ({ id: prod.id, ...prod.data() }) )))
  .catch(err => console.log(err))
  .finally(() => setLoading(false))
}, [])*/

/*   //Traer todos los productos
  useEffect (() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'productos')
    getDocs(queryCollection)
    .then(res => setProductos(res.docs.map(prod => ({ id: prod.id, ...prod.data() }) )))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, []) */

/*
//Traer un solo producto
useEffect (() => {
  const db = getFirestore()
  const queryDoc = doc(db, 'items', 'Oo8r7xTHHH1nWUbcU1AP')
  getDoc(queryDoc)
  .then(res => setProductos(res.docs.map(prod =>({ id: prod.id, ...prod.data() })) ))
  .catch(err => console.log(err))
  .finally(() => setLoading(false))
})*/
/* FIN APUNTES */