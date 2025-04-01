//const API ='http://localhost:3000/inventories' 

import { Inventory } from "../interface/inventory.interface";

const token = localStorage.getItem("token"); // token almacenado en localStorage

export const createInventoryRequest = (inventory: Inventory) =>
    fetch('http://localhost:3000/inventories', {
        method: 'POST',
        body: JSON.stringify(inventory),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

export const getUserInventories = async (userId: string): Promise<Inventory[]> => {
    const response = await fetch('http://localhost:3000/inventories/user', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'user-id': userId.toString(),
        },
    });

    if (!response.ok) {
        throw new Error('Error obteniendo inventarios');
    }

    return response.json(); // Devolver los inventarios tipados como Inventory[]
};
  
/*
export const updateInventory = async (id:string, data) => {
    const response = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  };
  */
