import './Item.css'
import { Link } from 'react-router-dom'



const Item = ({id, nombre, precio, img}) => {
    return (
        <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
            <h3 class="text-center"> {nombre} </h3>
            <p>Precio:{precio} </p>
            <p>ID: {id} </p>
            <Link to={`/item/${id}`} > Ver Más </Link>
        </div>
    )
}

export default Item 