const misProductos = [
    { id: "1", nombre: "Guitarra Acústica", precio: 5000, img: "../img/guit1.png", idCat: "1" },
    { id: "2", nombre: "Guitarra Eléctrica", precio: 1000, img: "../img/guit2.png",idCat: "1" },
    { id: "3", nombre: "Bajo Eléctrico", precio: 1500, img: "../img/bajo1.png", idCat: "2" },
    { id: "4", nombre: "Batería", precio: 2500, img: "../img/bat1.png", idCat: "3" },
    { id: "5", nombre: "Piano", precio: 7500, img: "../img/tec1.png", idCat: "4" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}
export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
}