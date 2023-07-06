import { toast } from "react-toastify";
import axios from 'axios';
import { backendAPI } from "../utils/constants";
import { setToLocalStorage } from "../utils/utils";

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
            if (response.status !== 200) toast.error(`No Estates available or error occurred`, { position: toast.POSITION.TOP_CENTER});
            //if (response.status === 200) toast.warning(`Estates fetched successfully!`, { position: toast.POSITION.TOP_CENTER});
            return response.data;
      } catch (error) {
            console.log(`No Estates available or error occurred `)
            //toast.error(`No Estates available or error occurred `, { position: toast.POSITION.TOP_CENTER});
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


export const getEstateAccessLogs = async (estateId) => {

      try {
            const response = await axios.get(`${backendAPI}/access/estate/${estateId}`, config);
            if (response.status !== 200) toast.error(`An error occured while fetching estate access logs`, { position: toast.POSITION.TOP_CENTER});
            //if (response.status === 200) toast.warning(`Estate fetched successfully!`, { position: toast.POSITION.TOP_CENTER});
            return response.data;
      } catch (error) {
            toast.error(`Error occured while fetching estate access logs: ${error.message} `, { position: toast.POSITION.TOP_CENTER});
      }
}

export const CreateNewResidentTag = async (tagData) => {
      try {
            const response = await axios.post(`${backendAPI}/tags`, tagData, config);
            if (response.status !== 201) toast.error(`An error occured while creating new tag`, { position: toast.POSITION.TOP_CENTER});
            toast.warning(`Tag created successfully!`, { position: toast.POSITION.TOP_CENTER});
            //fetch all tags
            await getAllEstateTags(response.data.estateId);
            return response.data;
      } catch (error) {
            toast.error(`Error occured while creating new tag: ${error.message} `, { position: toast.POSITION.TOP_CENTER});
      }
}

export const getAllEstateTags = async (estateId) => {
      try {
            const response = await axios.get(`${backendAPI}/tags/estate/${estateId}`, config);
            if (response.status !== 200) toast.error(`An error occured while fetching estate tags`, { position: toast.POSITION.TOP_CENTER});
            //if (response.status === 200) toast.warning(`Estate fetched successfully!`, { position: toast.POSITION.TOP_CENTER});
            setToLocalStorage('estateTags', response.data);
            return response.data;
      } catch (error) {
            console.log(`Error occured while fetching estate tags: ${error.message} `)
            //toast.error(`Error occured while fetching estate tags: ${error.message} `, { position: toast.POSITION.TOP_CENTER});
      }
}