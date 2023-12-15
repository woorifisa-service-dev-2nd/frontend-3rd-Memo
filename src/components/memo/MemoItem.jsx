import { createPortal } from 'react-dom'
import '../../App.css'
import React, { useState } from 'react'
import Modal from '../ui/Modal'
import MemoForm from './MemoForm'
import MemoDetail from './MemoDetail'

const MemoItem = ({ memo, isOpen, onOpen, onClose }) => {


    return (
        <>
            <td className='cell'>
                <div className='inner' onClick={onOpen}>
                    <h2> {memo.title} </h2>
                    <h5> {memo.writer} </h5><br /><br />
                    {/* <h4>{memo.content} </h4><br /> */}
                </div>
                {isOpen && createPortal(
                    <Modal onClose={onClose}>
                        <MemoDetail memo={memo} onClose={onClose}/>
                    </Modal>,
                    document.body
                )}
            </td>

        </>
    )
}

export default MemoItem