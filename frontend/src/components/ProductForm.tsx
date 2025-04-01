import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createProduct } from '../api/product';
import { Product } from '../interface/product.interface';

export default function AddProduct() {
  const navigate = useNavigate();

  const { inventoryId } = useParams<{ inventoryId: string }>();
  const [product, setProduct] = useState<Product>({
    name: '',
    serial: '',
    category: '',
    regu: '',
    mayo: '',
    stock: '',
    status: '',
    description: '',
    imageurl: '',
    inventoryId: inventoryId!,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createProduct(product);
    console.log(product)
    //navigate(`/inventory/${inventoryId}/products`);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Agregar Nuevo Producto</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input type="text" name="name" placeholder="Nombre" value={product.name} onChange={handleChange} className="p-2 border rounded w-full" required />
        <input type="text" name="serial" placeholder="Serial" value={product.serial} onChange={handleChange} className="p-2 border rounded w-full" required />
        <input type="text" name="category" placeholder="Categoría" value={product.category} onChange={handleChange} className="p-2 border rounded w-full" required />
        <input type="text" name="regu" placeholder="Regu" value={product.regu} onChange={handleChange} className="p-2 border rounded w-full" required />
        <input type="text" name="mayo" placeholder="Mayo" value={product.mayo} onChange={handleChange} className="p-2 border rounded w-full" required />
        <input type="text" name="stock" placeholder="Stock" value={product.stock} onChange={handleChange} className="p-2 border rounded w-full" required />
        <input type="text" name="status" placeholder="Estado" value={product.status} onChange={handleChange} className="p-2 border rounded w-full" required />
        <input type="text" name="imageurl" placeholder="imageurl" value={product.imageurl} onChange={handleChange} className="p-2 border rounded w-full" required />
        <textarea name="description" placeholder="Descripción" value={product.description} onChange={handleChange} className="p-2 border rounded w-full" required />
        <button type="submit" className="p-2 bg-green-500 text-white rounded w-full">Guardar Producto</button>
        <button type="button" className="p-2 bg-gray-400 text-white rounded w-full" onClick={() => navigate(`/inventory/${inventoryId}/products`)}>Cancelar</button>
      </form>
    </div>
  );
}
