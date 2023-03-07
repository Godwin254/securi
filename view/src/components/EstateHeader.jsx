import React from 'react'
import { FaHome } from 'react-icons/fa'

function EstateHeader() {
      return (
            <div className="dashboard__main__panel1">
                  <FaHome className="dashboard__main__panel1__icon" />
                  <h5 className="dashboard__main__panel1__title">
                        Uzima Estate Suite |
                  </h5>
                  <span className="dashboard__main__panel1__text">
                        House 407
                  </span>
            </div>
      )
}

export default EstateHeader