
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from 'react'
import { useCartContext } from '../../../context/cartContext'

export default function CarritoPage(){

    const  [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email:''

    })
    const { cartlist, vaciarCarrito, precioTotal } = useCartContext()


    const generarOrden = async (e)=>{
        e.preventDefault()
        const orden = {}
        
        orden.buyer= {
            name: dataForm.name,
            phone: dataForm.phone,
            email: dataForm.email
        }

        orden.items= cartlist.map(prod => {
            const {id, name: title, price} = prod
            return {id, title, price}
        })

        orden.total= precioTotal()

        const db = getFirestore()
        const orders = collection(db, 'orders')
        addDoc(orders, orden) // setDoc(orders, obj, id)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(() => vaciarCarrito())
    }

    const handleInputChange = (e) => {        
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    console.log(dataForm)
    return (
            <div>

                <h1>Carrito</h1>
            <ul>
                {cartlist.map(producto => <li> nombre: {producto.name} categoría:{producto.categoria} precio: {producto.price} Cant: {producto.cantidad} </li> )}
            </ul>
            <h2>Total: {precioTotal()}</h2>

            {/* fomulario para la orden */}
            <form onSubmit={generarOrden}>
                <input 
                    type="text" 
                    name="name"
                    placeholder="Nombre" 
                    value={dataForm.name}
                    onChange={handleInputChange}
                />
                <input 
                    type="text"
                    name="phone" 
                    value={dataForm.phone}
                    placeholder="Teléfono" 
                    onChange={handleInputChange}
                />
                <input 
                    type="text" 
                    name="email"
                    value={dataForm.email}
                    placeholder="Email" 
                    onChange={handleInputChange}
                />
                <button type="submit">Generar orden</button>
            </form>
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
            
        </div>
  )
}

