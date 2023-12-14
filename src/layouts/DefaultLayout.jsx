import React from 'react'

const DefaultLayout = ({children}) => {
  return (
    <div className='container'>
    <div className='App'>
            {children}
        </div>
    </div>
  )
}

export default DefaultLayout