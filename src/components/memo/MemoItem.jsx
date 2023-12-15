import React from 'react'
import MemoForm from './MemoForm'
import { createPortal } from 'react-dom'
import Modal from '../ui/Modal'

const MemoItem = ({ memo, onAdd, isOpen, onOpen, onClose }) => {
    return (
        <>
        <td className='cell' key={memo.id}>
        <button  className='left-fix star-btn'>☆</button>
            <div className='inner' onClick={onOpen}>
                <h2 > {memo.id} </h2>
                <h5 > {memo.title} </h5><br /><br />
                <h4 className="text-ellipsis overflow-hidden ..."> {memo.summary} </h4><br />
            </div>
            {isOpen && createPortal(
                    <Modal onClose={onClose}>
                        <MemoForm memo={memo} onAdd={onAdd} onClose={onClose}/>
                    </Modal>,
                    document.body
                )}
        </td>
        </>
    )
}

export default MemoItem