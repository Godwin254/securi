import { toast } from "react-toastify";
import axios from 'axios';
import { backendAPI } from "../utils/constants";

const config = {
      headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
      }
}

const endpoint = `${backendAPI}/estates`


export const getAllEstates = async () => {
      try {
            const response = await axios.get(`${endpoint}`, config);
            if (response.status !== 200) toast.error(`An error occured while fetching estates`, { position: toast.POSITION.TOP_CENTER});
            //if (response.status === 200) toast.warning(`Estates fetched successfully!`, { position: toast.POSITION.TOP_CENTER});
            return response.data;
      } catch (error) {
            toast.error(`Error occured while fetching estates: ${error.message} `, { position: toast.POSITION.TOP_CENTER});
      }
}

export const getEstateById = async (estateId) => {
      try {
            const response = await axios.get(`${endpoint}/${estateId}`, config);
            if (response.status !== 200) toast.error(`An error occured while fetching estate`, { position: toast.POSITION.TOP_CENTER});
            //if (response.status === 200) toast.warning(`Estate fetched successfully!`, { position: toast.POSITION.TOP_CENTER});
            return response.data;
      } catch (error) {
            toast.error(`Error occured while fetching estate: ${error.message} `, { position: toast.POSITION.TOP_CENTER});
      }
}


export const getEstateConfig = async (userId) => {
      try {
            const response = await axios.get(`${backendAPI}/estate-config/${userId}`, config);
            if (response.status !== 200) toast.error(`An error occured while fetching estate`, { position: toast.POSITION.TOP_CENTER});
            //if (response.status === 200) toast.warning(`Estate fetched successfully!`, { position: toast.POSITION.TOP_CENTER});
            return response.data;
      } catch (error) {
            toast.error(`Error occured while fetching estate: ${error.message} `, { position: toast.POSITION.TOP_CENTER});
      }
}