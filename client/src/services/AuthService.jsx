import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';
import isEqual from 'lodash/isEqual';


import { setToLocalStorage, getLocalStorageItem } from '../utils/utils';
import { backendAPI } from '../utils/constants';
import { pathNavigator } from '../utils/utils';

const accessToken = getLocalStorageItem("firebase-token");
const config = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};
const endpoint = `${backendAPI}/auth`

//login user
export const loginUser = async ({ email, password }) => {

    const response = await axios.post(`${endpoint}/login`, { email, password }, config);

    if (response.status !== 200)  console.log("An Error occured!");
    
    const { token, uid, role} = response.data;
    setToLocalStorage("authData", {uid, role})
    await getUserDetails(uid, role); //retrieve user detals
  
    return {token, role}
};

export const logoutUser = () => {
  // Clear local storage
  toast.success("You are logged out!", { position: toast.POSITION.TOP_CENTER});
  localStorage.clear();
  window.location.pathname = '/auth/login';
};


//register user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${endpoint}/signup`, userData, config);
    if (response.status === 201) toast.warning(`Registered ${response.data.firstname} successfully!`, { position: toast.POSITION.TOP_CENTER});
    return response;
  } catch (error) {
    toast.error(`Error occured during signup: ${error.message} `, { position: toast.POSITION.TOP_CENTER});
  }
};


export const getUserDetails = async (userId, role) => {
  try {
    
    let user = {};

    const url = role === 'admin'
      ? `${backendAPI}/admin/${userId}`
      : `${backendAPI}/residents/${userId}`;

    const response = await axios.get(url, config);

    if (response.status !== 200) {
      console.log('An error occurred!');
      throw new Error('An error occurred while fetching user details');
    }

    const fetchedUserData = response.data;

    if (!isEqual(user, fetchedUserData)) {
      setToLocalStorage('userData', fetchedUserData);
      user = fetchedUserData
    }
  
    return fetchedUserData;
  } catch (error) {
    console.error('Error while fetching user details:', error);
    throw error;
  }
};

