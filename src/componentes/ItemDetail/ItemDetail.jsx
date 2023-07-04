import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
    return (
        <div>
            <h2>Instrumento: {nombre} </h2>
            <h3>Valor: {precio} </h3>
            <h3>ID: {id} </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Ex, placeat facilis accusamus reiciendis ea nisi vitae corrupti. 
        Quam voluptates id porro doloribus! Expedita vel molestias earum eligendi deserunt incidunt ipsa.</p>
            <img className='imgDetail' src={img} alt={nombre} />
        </div>

    )
}

export default ItemDetail