import { useNavigate } from "react-router-dom"

export let cachedData  = {};

export const setToLocalStorage = (storageName, storageData) => {
      localStorage.setItem(storageName , JSON.stringify(storageData));
}

export const getLocalStorageItem =  (key) => {
      let item = localStorage.getItem(key);
      
      return item;
};
    
    

export const getDateFormat = (format) => {
      switch(format){
            case 'year':
                  return new Date().getFullYear();
            case 'string':
                  return new Date().toDateString();
      }
}

export const pathNavigator = (pathArray=[]) => {
      const path = pathArray.join('/');
      const navigate = useNavigate()
      navigate(path);
}