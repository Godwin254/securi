import React from 'react'
import { BiMenu } from 'react-icons/bi'

function PageHeader({title}) {
      return (
            <div className="dashboard__main__panel1">

                  <BiMenu className="dashboard__main__panel1__icon" />
                  <h5 className="dashboard__main__panel1__title">
                        {title || null}
                  </h5>
                  <span className="dashboard__main__panel1__text info-tag2">
                        Wed Mar 31 2023
                  </span>
                  
            </div>
      )
}

export default PageHeader;