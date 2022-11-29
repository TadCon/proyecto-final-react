import { memo } from "react"
import { Link } from "react-router-dom"
import './Item.css'


const Item = memo(({prod}) => {
       // console.log('Item')

        return (
            <div            
                className='col-3 m-3'
            >    
                <Link to={`/detalle/${prod.id}`}>
                    <div className="card w-100 mt-5" >
                        <div className="container">
                            {`${prod.name} - ${prod.categoria}`}
                        </div>
                        <div className="card-body">
                            <img src={prod.foto} alt='Imagen ilustrativa del producto' className='' />
                            <br />
                        </div>
                
                        <div className="card-footer">                                                        
                            Precio: {prod.price}                                                            

                        </div>
                    </div>
                </Link>                   
    
            </div> 
    
        )
    }
) 

export default Item