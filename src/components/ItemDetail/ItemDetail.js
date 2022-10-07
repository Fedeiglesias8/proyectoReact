import './ItemDetail.css'
import Counter from "../Counter/Counter";

const ItemDetail = ({img, name, price, id, description, stock, category}) =>{

    const handleOnAdd = (count) => {
        const productToAdd = {
            id, name, price, count
        }
        console.log(productToAdd)
    }

        return(
            <div className='cajaItemDetail'>
                <div>
                    <img className='imagenItemDetail' src={img} alt={category} />
                </div>
                <div className='bodyItemDetail'>
                    <h3>{name}</h3>       
                    <h6>{description}</h6>
                    <p>{price}</p>
                </div>

                  <Counter onAdd={handleOnAdd} stock={stock} />
            </div>
        )

}

export default ItemDetail