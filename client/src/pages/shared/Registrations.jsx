import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

import { CreateEstateForm, CreateResidentDetailsForm } from '../../components'
import { WebLayout } from '../../layout/WebLayout';

import { createNewEstate } from '../../services/AdminServices';
import { getLocalStorageItem } from '../../utils/utils';

export function Registrations() {
      const {role, uid} = useParams();
      

      const handleCreateEstate = async (estateData) => {
            await createNewEstate(uid, estateData);
      }

      return (
            <WebLayout>
                  {
                        role === 'admin'
                        ? <CreateEstateForm estate={{}} handleSubmit={handleCreateEstate} title='Register New Estate' btnText='Create New Estate'/> 
                        : <CreateResidentDetailsForm handleSubmit={handleFormSubmit} title='Resident Account Setup' btnText='Save New Changes'/>
                  }
            </WebLayout>
      
      )
}