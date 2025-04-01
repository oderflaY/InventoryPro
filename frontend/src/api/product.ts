import { Product } from "../interface/product.interface";

export async function createProduct(productData: Product): Promise<Product> {
  const response = await fetch('http://localhost:3000/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Error en la API:', errorData);
    throw new Error('Error al crear el producto');
  }

  return response.json();
}

export async function getProductsByInventory(inventoryId: string): Promise<Product[]> {
  const response = await fetch(`${'http://localhost:3000/products'}/${inventoryId}`,);
  return response.json();
}