import React from 'react'
import { BiMenu } from 'react-icons/bi'

export function DashboardHeader({title, date}) {
      return (
            <div className="flex flex-row items-center border-2 border-ccc w-[80vw] mx-auto py-4 px-5 mt-8 rounded-md bg-white">

                  <BiMenu className="dashboard__main__panel1__icon" />
                  <h5 className="dashboard__main__panel1__title mx-3">
                        {title || null}
                  </h5>
                  <span className="dashboard__main__panel1__text info-tag2">
                        {date}
                  </span>
                  
            </div>
      )
}
