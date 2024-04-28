import React, { ReactNode } from 'react'

function RootLayout({children} : {children : ReactNode}) {
  return (
    <main className='h-full bg-revb'>
      {children}
    </main>
  )
}

export default RootLayout
