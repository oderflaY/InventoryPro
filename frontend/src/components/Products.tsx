import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsByInventory } from "../api/product";
import { Product } from "../interface/product.interface";
import AddItemModal from "./ItemAddModal";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { inventoryId } = useParams();
  const [AddProdOpen, setAddProdOpen] = useState(false);

  useEffect(() => {
    if (inventoryId) {
      getProductsByInventory(inventoryId).then(setProducts);
    }
  }, [inventoryId]);

  return (

    <div>
      <div className="relative h-15">
        <button
          //onClick={() => navigate(`/inventory/${inventoryId}/add-product`)}
          onClick={() => setAddProdOpen(!AddProdOpen)}
          className="absolute top-0 right-0 m-2 mx-5 my-3 bg-[#11214D] text-white border-2 border-transparent px-4 py-2 font-medium text-sm rounded-md hover:bg-white hover:text-[#11214D] hover:border hover:border-[#11214D] hover:font-medium">
          Add New Product
        </button>
      </div>

      {AddProdOpen && (
                <div className="relative inline-block pl-279 top-full ">
                    {/* Mostrar modal si isModalOpen es true */}
                    {AddProdOpen && <AddItemModal onClose={() => setAddProdOpen(false)} />}
                </div>

            )}

      {products.length === 0 ? (
        <div>
          <p className="text-center font-bold text-[#11214D]">You have no Products in this inventory</p>
        </div>
      ) : (
        <ul className="space-y-2">
          {products.map((prod) => (
            <li key={prod.id} className="p-2 bg-gray-200 rounded">
              {prod.name} - ${prod.regu}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
