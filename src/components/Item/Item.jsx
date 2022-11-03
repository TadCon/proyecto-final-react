import { memo } from "react"
import { Link } from "react-router-dom"


const Item = memo(({prod}) => {
        console.log('Item')

        return (
            <div            
                style={{ marginLeft: 100}}
                className='col-md-3'
            >    
                <Link to={`/detalle/${prod.id}`}>
                    <div className="card w-100 mt-5" >
                        <div className="">
                            {`${prod.name} - ${prod.categoria}`}
                        </div>
                        <div className="card-body">
                            <img src={prod.foto} alt='Imagen ilustrativa del producto' className='w-50' />
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