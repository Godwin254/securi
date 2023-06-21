import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

import { CreateEstateForm, CreateResidentDetailsForm } from '../../components'
import { WebLayout } from '../../layout/WebLayout';

import { createNewEstate } from '../../services/AdminServices';
import { getLocalStorageItem } from '../../utils/utils';
import { updateResidentRecord } from '../../services/ResidentServices';

export function Registrations() {
      const {role, uid} = useParams();
      

      const handleCreateEstate = async (estateData) => {
            await createNewEstate(uid, estateData);
      }

      const handleUpdateResidentDetails = async (data) => {
            await updateResidentRecord(uid,data)
      }

      return (
            <WebLayout>
                  {
                        role === 'admin'
                        ? <CreateEstateForm estate={{}} handleSubmit={handleCreateEstate} title='Register New Estate' btnText='Create New Estate'/> 
                        : <CreateResidentDetailsForm userData={{vehicle:{}}} handleSubmit={handleUpdateResidentDetails} title='Resident Account Setup' btnText='Save New Changes'/>
                  }
            </WebLayout>
      
      )
}