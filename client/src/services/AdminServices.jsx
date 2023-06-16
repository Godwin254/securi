import { useState, useEffect } from "react";
import { backendAPI } from "../utils/constants";
import { getLocalStorageItem, setToLocalStorage } from "../utils/utils";

import {toast} from 'react-toastify';

const endpoint = `${backendAPI}/admin`;

//create new estate
export const createNewEstate = (adminId, estateData) => {

      return async () => {
            const response = await fetch(`${endpoint}/${adminId}/estate`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(estateData),
            });
              
            if (!response.ok) console.error('Failed to create new estate:', response.status);
      
            const newEstate = await response.json();
            console.log('New estate created:', newEstate);
            
            // Fetch admin details after 
            await getAdminDetails(adminId);

      }

};

//update estate - PUT
export const updateEstateData = (adminId, updatedEstateData) => {

      return async () => {
            const response = await fetch(`${endpoint}/${adminId}/estate`, {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(updatedEstateData),
            });
              
            if (!response.ok) console.error('Failed to update estate data:', response.status);
      
            const updatedEstate = await response.json();
            console.log('Estate data updated:', updatedEstate);
            
            // Fetch admin details after 
            await getAdminDetails(adminId);

      }
      

};
    

//delete estate


///assign card ID to resident

//unassign card ID to residents

//get access history

//