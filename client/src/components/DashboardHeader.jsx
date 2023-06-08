import React from 'react'
import { BiMenu } from 'react-icons/bi'
import { useParams, useLocation } from 'react-router-dom'

export function DashboardHeader({title, date}) {
      const location = useLocation()

      //console.log(location.pathname.slice(0,2))
      return (
            <div className="flex flex-row items-center border-2 border-ccc w-[80vw] mx-auto py-4 px-5 mt-8 rounded-md bg-white">

                  <BiMenu className="dashboard__main__panel1__icon text-2xl font-semibold cursor-pointer" />
                  <h5 className="dashboard__main__panel1__title mx-3 text-gray-400">
                        {location.pathname}
                  </h5>
                  <span className="dashboard__main__panel1__text info-tag2">
                        {date ?? "--"}
                  </span>
                  
            </div>
      )
}
