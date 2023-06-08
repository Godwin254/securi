import { useState, useEffect } from "react";
import { backendAPI } from "../utils/constants";
import { getLocalStorageItem, setToLocalStorage } from "../utils/utils";

const endpoint = `${backendAPI}/admin`;
//get admin info
export const getAdminDetails = (adminId) => {
  const [admin, setAdmin] = useState(() => {
    const savedAdmin = getLocalStorageItem('adminData');
    return savedAdmin ? JSON.parse(savedAdmin) : {};
  });

  console.log(adminId)
    
  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const response = await fetch(`${endpoint}/${adminId}`);
        if (response.ok) {
          const data = await response.json();
          setAdmin(data);
          setToLocalStorage('adminData', data);
        } else {
              //send error message to the toast service
          console.error('Failed to fetch admin details:', response.status);
        }
      } catch (error) {
        console.error('Error while fetching admin details:', error);
      }
    };

    //fetchAdminDetails();
    !admin.uid || admin.uid || !admin !== adminId && fetchAdminDetails();
  }, [adminId]);
    
  return admin.uid === adminId ? admin : {};
};
   


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
              
            if (response.ok) {
            const createdEstate = await response.json();
            console.log('New estate created:', createdEstate);
            return createdEstate;
            }
              
            console.error('Failed to create estate:', response.status);
            throw new Error('Failed to create estate');

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