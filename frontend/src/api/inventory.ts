//const API ='http://localhost:3000' 

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
    console.log(token)
