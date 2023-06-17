import axios from 'axios';
import { backendAPI } from '../utils/constants';
import {toast} from 'react-toastify';
import { cachedData } from '../utils/utils';
import { setToLocalStorage } from '../utils/utils';


const accessToken = localStorage.getItem('firebase-token');

const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };

export const decodeAccessToken = (token) => {
      const encodedPayLoad = token.split('.')[1];
      const {email, user_id} =  JSON.parse(window.atob(encodedPayLoad));
      const user = getUser(user_id) 
      return user;//{email, uid: user_id} //user
}

export const getAllResidents = async () => { 
      const response = await axios.get(`${backendAPI}/residents`, config);
      if(response.status !== 200) toast.error('Error fetching residents');
      return response.data;
}

export const getAllResidentsByEstate = async (estateId) => {
      const response = await axios.get(`${backendAPI}/residents/estates/${estateId}`, config);
      if(response.status !== 200) toast.error('Error fetching residents by estate');

      setToLocalStorage('estateResidents', response.data);
      return response.data;
}

const init = async () => {
      //const residents = await getAllResidentsByEstate("eRfntVWsp2jbAPjqZI7D");
      //console.log(residents);
}

init();

export const getResident = (uid) => {
      const response = axios.get(`${backendAPI}/residents/${uid}`, config);
      if(response.status !== 200) toast.error('Error fetching resident details');
      return response.data;
}

export const updateResidentRecord = async (uid, data) => {
      const response = await axios.put(`${backendAPI}/residents/${uid}`, data, config);
      if(response.status !== 200) toast.error('Error updating resident details');

      toast.success('Resident details updated successfully');
      return response.data;
}

export const deleteResidentRecord = async (uid) => {
      const response = await axios.delete(`${backendAPI}/residents/${uid}`, config);
      if(response.status !== 200) toast.error('Error deleting resident details');
      return response.data;
}

//members operation
export const getAllMembers = async (uid) => {
      const resident = await getResident(uid);
      console.log(resident);
      //const {members} = resident;
      //check if members is empty
      //if(members.length === 0) return [];
      //return members;
}

export const getMember = async (uid, memberId) => {
      const members = await getAllMembers(uid);
      const member = members.find(member => member.id === memberId);
      return member;
}

export const addMember = async (uid, data) => {
      const response = await axios.post(`${backendAPI}/residents/${uid}/members`, data, config);
      if(response.status !== 201) toast.error('Error adding member');
      return response.data;
}

export const updateMember = async (uid, memberId, data) => {
      const response = await axios.put(`${backendAPI}/residents/${uid}/members/${memberId}`, data, config);
      if(response.status !== 200) toast.error('Error updating member');
      return response.data;
}

export const deleteMember = async (uid, memberId) => {

      //optimized version
      const response = await axios.delete(`${backendAPI}/residents/${uid}/members/${memberId}`, config);
      if(response.status !== 200) toast.error('Error deleting member');
      return response.data;
}
