import '../../App.css'
import React, { useState } from 'react'
import MemoItem from './MemoItem'
import { createPortal } from 'react-dom';
import MemoForm from './MemoForm'
import Modal from '../ui/Modal';

const MemoBody = ({ memos, onAdd }) => {
    const [isOpen, open] = useState(false);
    const openModal = () => open(true);
    const closeModal = () => open(false);

    return (
        <>
            <div className='container'>
                <div className='App'>
                    <p className='title grid place-items-center text-3xl'>메모장</p><br /><br />
                    <table>
                        <tbody >
                            <tr className='trList'>
                                {memos.map(memo => <MemoItem memo={memo} key={memo.id} isOpen={isOpen} onOpen={openModal} onClose={closeModal}/>)}
                                <td className='cell' >
                                    <div className='inner' onClick={openModal}>
                                        <img src={'/plus.png'} className='picture' alt='logo' />
                                    </div>
                                    {isOpen && createPortal(
                                         <Modal onClose={closeModal}>
                                            <MemoForm onAdd={onAdd} onClose={closeModal}>새로운 메모</MemoForm>
                                         </Modal>,
                                        document.body
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </>
    )
}

export default MemoBody