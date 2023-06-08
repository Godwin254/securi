import React from 'react'
import { Navbar } from '../components'

export function WebLayout({children}) {
  return (
      <div className=''>
            <Navbar />
            <main className='bg-gray-50 h-[90vh] flex items-center justify-center'>
                  {children}
            </main>
      </div>
  )
}