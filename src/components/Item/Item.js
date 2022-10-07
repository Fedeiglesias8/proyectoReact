import './Item.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'

const Item = ({img, name, price, id}) =>{

    return(

            <div className='card'>
                <Link to={`/detail/${id}`} className='linkCard'>
                    <img className='card-img-top'   src={img} alt={name} />
                    <div className='card-body'>
                    <h5>{name}</h5>
                     <p className='card-text'>{price}</p>
                    </div>
                </Link>
            </div>
            
    )
}

export default Item