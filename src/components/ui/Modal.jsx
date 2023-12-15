import '../../App.css'
import React from 'react'

const Modal = ({ children, onClose }) => {
  console.log(onClose);

  
  return (
    <>
        {/* <div className='Modal'> */}
        <div data-cy="modal-backdrop" className='fixed top-0 left-0 w-full h-full backdrop-blur-sm z-1' onClick={onClose}></div>
        
            {children}
       
        {/* </div> */}
    </>
  )
}

export default Modal