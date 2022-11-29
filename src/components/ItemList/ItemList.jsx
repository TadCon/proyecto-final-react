import { memo } from "react"
import Item from "../Item/Item"

const ItemList = memo(({productos}) => {
      //  console.log('ItemList')
        return (
            <div
            className=""
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                {productos.map( prod =>  <Item key={prod.id} prod={prod} />  )}
        </div>
        )
    }
)


export default ItemList