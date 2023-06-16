import { useState, useEffect } from "react";
import { backendAPI } from "../utils/constants";
import { getLocalStorageItem, setToLocalStorage } from "../utils/utils";

import {toast} from 'react-toastify';
import axios from "axios";
import { getUserDetails } from "./AuthService";

const accessToken = getLocalStorageItem("firebase-token");
const config = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

const store = JSON.parse(localStorage.getItem("authData"));
const endpoint = `${backendAPI}/admin`;

//create new estate
export const createNewEstate = async (adminId, estateData) => {
      const response = await axios.post(`${endpoint}/${adminId}/estate`, estateData, config);
      if (response.status !== 201) toast.error(`An error occured when creating estate`, { position: toast.POSITION.TOP_CENTER});
      toast.success(`Created estate successfully`, { position: toast.POSITION.TOP_CENTER});

      return response.data;
};

//update estate - PUT
export const updateEstateConfig = async (adminId, updatedEstateData) => {
      const response = await axios.put(`${endpoint}/${adminId}/estate`, updatedEstateData, config);
      if (response.status !== 200) toast.error(`An error occured when updating estate`, { position: toast.POSITION.TOP_CENTER});
      await getUserDetails(store.uid, store.role); //after update get user details again
      
      toast.success(`Estate updated successfully`, { position: toast.POSITION.TOP_CENTER});
      return response.data;    
};

export  const deleteEstate = async (adminId) => {
      const response = await axios.delete(`${endpoint}/${adminId}/estate`, config);
      if (response.status !== 204) toast.error(`An error occured when deleting estate`, { position: toast.POSITION.TOP_CENTER});
      return response.data;    
}
    

//delete estate


///assign card ID to resident

//unassign card ID to residents

//get access history

//