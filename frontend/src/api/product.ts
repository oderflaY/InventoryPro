//const API ='http://localhost:3000' 

import { Product } from "../interface/product.interface";

export const createProductRequest = (product: Product) =>
    fetch('http://localhost:3000/products', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json'
        }
    })
