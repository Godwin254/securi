import React, {useState} from 'react'
import { toast } from 'react-toastify';


export function AddFingerprintV2({estateId, users, closeDialog, handleSubmit}) {

      //const [memberId, setMemberId] = useState('');
      const [fingerprintId, setFingerprintId] = useState('');
      const [residentId, setResidentId] = useState('');
      //const [estateId, setEstateId] = useState(estateId);
      //const [residents, setResidents] = useState(residents);


      const handleCreateFingerprint = async (e) => {
            e.preventDefault()
            if(!fingerprintId || !residentId) {
                  toast.warning('Please fill in all fields');
                  return;
            }
            const data = {
                  fingerprintId,
                  residentId,
                  estateId
            }
            await handleSubmit(data);
      }
      const handleClose = () => {
            closeDialog(false);
      }

      const handleInputChange = (e) => {
            
            const {name, value} = e.target;
            switch(name) {
                  case "fingerprintId":
                        setFingerprintId(value);
                        break;
                  case "residentId":
                        setResidentId(value);
                        break;
                  default:
                        break;
            }
            
      }

      //filter members who already have fingerprintId
      const residents = users.filter(user => !user.fingerprintId);


  return (
    <div className=' absolute inset-0 flex flex-col items-center justify-center z-20 transition-opacity duration-500 ease-in-out'>
            <form onSubmit={handleCreateFingerprint} className="login__form box-bg-shadow">
                  <h1 className="login__form__title text-3xl font-semibold">
                        Assign Fingerprint
                  </h1>

                  <div className="login__form__control">
                        <input
                              type="text"
                              name='estateId'
                              placeholder='Select Estate'
                              value={`estate_${estateId}`}
                              disabled = {true}
                              className='bg-gray-100 text-gray-500'
                        />

                        <div className="login__form__control">
                              <select id="residentId" name="residentId" onChange={handleInputChange}>
                                    <option value="">Assign To:</option>
                                    {
                                          residents.length > 0 
                                          ? residents.map((resident, index) => <option key={index} value={resident.uid}>{`${resident.firstname} ${resident.lastname}`}</option>)
                                          : <option value="">No Resident</option>
                                    }
                              </select>
                        </div>

                        <input
                              type="text"
                              name='fingerprintId'
                              placeholder='Set Fingerprint Id'
                              onChange={handleInputChange}
                              value={fingerprintId}
                        />
                        
                  </div>
                  <div className='mt-4 flex flex-row items-center justify-end'>
                        <button type='button'  className='bg-cyan-50 px-3 py-2 rounded-md' onClick={handleClose}>Close</button>
                        <button type="submit" className='bg-sky-950 px-5 py-2 ml-3 rounded-md text-cyan-50' >Assign</button>
                  </div>

            </form>
    </div>
  )
}