import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';
import isEqual from 'lodash/isEqual';


import { setToLocalStorage, getLocalStorageItem } from '../utils/utils';
import { backendAPI } from '../utils/constants';

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
    const authData = {
      token,
      uid,
      role,
      ...(response.data.hasOwnProperty('estateId') && { estateId: response.data.estateId })
    };
    setToLocalStorage("authData", authData);
    role !== "guard" && await getUserDetails(uid, role); //retrieve user details after login
  
    return authData;
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
    if (response.status !== 201) toast.error(`An error occured during registration`, { position: toast.POSITION.TOP_CENTER});
    if (response.status === 201) toast.warning(`Registered ${response.data.firstname} successfully!`, { position: toast.POSITION.TOP_CENTER});
    
    const { uid, role} = response.data;

    const authData = {
      uid,
      role,
      ...(response.data.hasOwnProperty('estateId') && { estateId: response.data.estateId })
    };

    console.log('authData', authData); //
    setToLocalStorage("authData", authData);

    return authData;
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

