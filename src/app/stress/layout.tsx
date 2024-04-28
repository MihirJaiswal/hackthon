import React, { ReactNode } from 'react'

function RootLayout({children} : {children : ReactNode}) {
  return (
    <main className='h-full bg-mainb'>
      {children}
    </main>
  )
}

export default RootLayout
