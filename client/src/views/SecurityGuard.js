import React from 'react'
import '../styles/components/SecurityGuard.scss'

function SecurityGuard() {
  return (
    <div className='Security'>
        <div className='partA'>
            <div className='card'>
                <div className='icon'>
                    RFID tag
                </div>
                <span>Scanning ...</span>
            </div>
            <div className='card'>
                <div className='icon'>
                    Fingerprint
                </div>
                <span>Scanning ...</span>
            </div>

        </div>
        <div className='partB'>
            <h4>No scan found!!</h4>
        </div>
    </div>
  )
}

export default SecurityGuard;
