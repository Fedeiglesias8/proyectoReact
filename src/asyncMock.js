const products = [
    { 
        id: '1',
        name: 'Suspension fija',
        category: 'suspension fija',
        stock: 4,
        description: 'Suspension fija hecha a medida para el modelo de tu auto',
        img: '/images/logoChiappone.png',
        price: '$14000'
    },
    { 
        id: '2',
        name: 'Suspension regulable',
        category: 'suspension regulable',
        stock: 8,
        description: 'Suspension regulable hecha a medida para el modelo de tu auto',
        img: '/images/logoChiappone.png',
        price: '$23000'
    },
    { 
        id: '3',
        name: 'Espirales',
        category: 'espirales',
        stock: 5,
        description: 'Espirlaes marca one',
        img: '/images/logoChiappone.png',
        price: '$6000'
    }   
]

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod=> prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}